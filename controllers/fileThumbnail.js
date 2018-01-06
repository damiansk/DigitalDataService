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
      
      generateThumbnail(files.File[file], (imgPath, fileName) => {
          // console.log(Buffer.from(imgPath, 'img/png').toString('base64'));
          // res.status(200);
            // .download(imgPath, fileName);
          res.sendFile(imgPath);
          
        },
        err => res.status(400).send({error: 'Wrong file'}));
    }
  });
};

function generateThumbnail(file, callback, error) {
  const width = 720;
  const height = 720;
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 130;
  const directionalLight = new THREE.PointLight( 0xffffff, 0.8 );
  camera.add( directionalLight );
  
  const light = new THREE.PointLight( 0xff0000, 0.5, 300 );
  light.position.set( 200, 200, 200 );
  
  
  const scene = new THREE.Scene();
  scene.add( light );
  
  
  const material = new THREE.MeshNormalMaterial({color: 0x2194ce});
  
  const fileExt = path.extname(file.path);
  console.log(fileExt);
  if(fileExt.toUpperCase() === '.STL') {
    const loader = new STLLoader();
  
    loader.load(file.path, function (geometry) {
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
  
      // Render into pixels-array (RGBA)
      const renderer = new SoftwareRenderer();
      renderer.setSize(width, height);
      var imagedata = renderer.render(scene, camera);
  
      // Create a PNG from the pixels array (RGBA)
      const png = new PNG({
        width: width,
        height: height,
        filterType: -1
      });
  
      for(var i=0;i<imagedata.data.length;i++) {
        png.data[i] = imagedata.data[i];
      }
  
      const imgName = file.originalFilename + '.png';
      const imgPath = path.join(uploadDir, imgName);
      const save = png.pack().pipe(fs.createWriteStream(imgPath));
  
      save.on('finish', () => {
        callback(imgPath, imgName);
      });
    });
  } else if(fileExt.toUpperCase() === '.OBJ') {
    const loader = new THREE.OBJLoader();
    
    loader.load(file.path, function(model) {
    
      console.log('Loaded...');
    
      // //Go through all children of the loaded object and search for a Mesh
      model.traverse(function(child) {
        //This allow us to check if the children is an instance of the Mesh constructor
        if (child instanceof THREE.Mesh) {
          child.rotation.y = Math.PI / 12;
          child.material = material;
          //Sometimes there are some vertex normals missing in the .obj files, ThreeJs will compute them
          child.geometry.computeVertexNormals();
        }
      });
    
      scene.add(model);
    
      // Render into pixels-array (RGBA)
      const renderer = new SoftwareRenderer();
      renderer.setSize(width, height);
      var imagedata = renderer.render(scene, camera);
    
      // Create a PNG from the pixels array (RGBA)
      const png = new PNG({
        width: width,
        height: height,
        filterType: -1
      });
    
      for(var i=0;i<imagedata.data.length;i++) {
        png.data[i] = imagedata.data[i];
      }
    
    
      const imgName = file.originalFilename + '.png';
      const imgPath = path.join(uploadDir, imgName);
      const save = png.pack().pipe(fs.createWriteStream(imgPath));
    
      save.on('finish', () => {
        callback(imgPath, imgName);
      });
    });
    
  } else {
    error();
  }
}