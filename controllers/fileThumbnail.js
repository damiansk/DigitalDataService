const multiparty = require('multiparty');
const path = require('path');
const fs = require('fs');
const THREE = require('three');
const STLLoader = require('../services/three-software-renderer/STLLoader')(THREE);
require('../services/three-software-renderer/OBJLoader');
const SoftwareRenderer = require('../services/three-software-renderer/software-renderer');
const PNG = require('pngjs').PNG;

const uploadDir = path.join(__dirname, 'thumbnails');
fs.existsSync(uploadDir) || fs.mkdirSync(uploadDir);

exports.generateThumbnail = (req, res) => {
  const form = new multiparty.Form({uploadDir});
  
  form.parse(req, (err, fields, files) => {
  
    for(let file in files.File) {
      
      generateThumbnail(files.File[file], (imgPath) => {
          res.sendFile(imgPath, err => {
            fs.unlinkSync(files.File[file].path);
          });
        },
        err => {
          res.status(415).send({error: 'Unsupported file format'});
          fs.unlinkSync(files.File[file].path);
        });
    }
  });
};

function generateThumbnail(file, callback, error) {
  const width = 720;
  const height = 720;
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 130;
  
  const scene = new THREE.Scene();
  const material = new THREE.MeshNormalMaterial();
  
  const fileExt = path.extname(file.path);
  
  if(fileExt.toUpperCase() === '.STL') {
    const loader = new STLLoader();
  
    loader.load(file.path, function (geometry) {
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
  
      const renderer = new SoftwareRenderer();
      renderer.setSize(width, height);
      const imagedata = renderer.render(scene, camera);
  
      const png = new PNG({
        width: width,
        height: height,
        filterType: -1
      });
  
      for(let i=0;i<imagedata.data.length;i++) {
        png.data[i] = imagedata.data[i];
      }
  
      const imgName = file.originalFilename + '.png';
      const imgPath = path.join(uploadDir, imgName);
      const save = png.pack().pipe(fs.createWriteStream(imgPath));
  
      save.on('finish', () => {
        callback(imgPath);
      });
    });
  } else if(fileExt.toUpperCase() === '.OBJ') {
    const loader = new THREE.OBJLoader();
    
    loader.load(file.path, function(model) {
    
      console.log('Loaded...');
    
      model.traverse(function(child) {
        if (child instanceof THREE.Mesh) {
          child.rotation.y = Math.PI / 12;
          child.material = material;
          child.geometry.computeVertexNormals();
        }
      });
    
      scene.add(model);
    
      const renderer = new SoftwareRenderer();
      renderer.setSize(width, height);
      const imagedata = renderer.render(scene, camera);
    
      const png = new PNG({
        width: width,
        height: height,
        filterType: -1
      });
    
      for(let i=0;i<imagedata.data.length;i++) {
        png.data[i] = imagedata.data[i];
      }
    
      const imgName = file.originalFilename + '.png';
      const imgPath = path.join(uploadDir, imgName);
      const save = png.pack().pipe(fs.createWriteStream(imgPath));
    
      save.on('finish', () => {
        callback(imgPath);
      });
    });
    
  } else {
    error();
  }
}