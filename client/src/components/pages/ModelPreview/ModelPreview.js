import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import OBJLoader from '../../../utils/OBJLoader';
import STLLoader from '../../../utils/STLLoader';

import './ModelPreview.css';


const fitCameraToObject = function ( camera, object, offset, controls ) {
  
  offset = offset || 1.25;
  
  const boundingBox = new THREE.Box3();
  
  // get bounding box of object - this will be used to setup controls and camera
  boundingBox.setFromObject(object);
  
  const center = boundingBox.getCenter();
  
  const size = boundingBox.getSize();
  
  // get the max side of the bounding box (fits to width OR height as needed )
  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  let cameraZ = Math.abs(maxDim / 4 * Math.tan(fov * 2));
  
  cameraZ *= offset; // zoom out a little so that objects don't fill the screen
  
  camera.position.z = cameraZ;
  
  const minZ = boundingBox.min.z;
  const cameraToFarEdge = (minZ < 0) ? -minZ + cameraZ : cameraZ - minZ;
  
  camera.far = cameraToFarEdge * 3;
  camera.updateProjectionMatrix();
  
  if (controls) {
    
    // set camera to rotate around center of loaded object
    controls.target = center;
    
    // prevent camera from zooming out far enough to create far plane cutoff
    controls.maxDistance = cameraToFarEdge * 2;
    
    controls.saveState();
    
  } else {
    
    camera.lookAt(center)
    
  }
};

class ModelPreview extends Component {
	
	constructor(props) {
		super(props);
		
		this.FPS = 24;
		
		this.canvas = {
      width: '720px',
      height: '720px',
      margin: '0 auto'
    };
		
		this.state = {
		  ready: false,
      error: false
    };
		
		this.loadObject = this.loadObject.bind(this);
		this.onSaveThumbnail = this.onSaveThumbnail.bind(this);
	}
 
	componentDidMount() {
		const width = this.previewContainer.clientWidth;
		const height = this.previewContainer.clientHeight;
		
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			width / height,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer({
      antialias: true,
      preserveDrawingBuffer: true
    });
		
		camera.position.z = 5;
		renderer.setClearColor(this.props.backgroundColor);
		renderer.setSize(width, height);
		
		const controls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.25;
		controls.enableZoom = true;
        
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    camera.add( directionalLight );
    scene.add(camera);
    
    this.material = new THREE.MeshLambertMaterial({color: this.props.meshColor});
    this.renderer = renderer;
    this.light = directionalLight;
		this.scene = scene;
		this.camera = camera;
		this.renderer = renderer;
		this.controls = controls;
		
		this.previewContainer.appendChild(this.renderer.domElement);
    
    this.loadObject();
	}
	
	componentDidUpdate(prevProps, prevState) {
	  const { backgroundColor, meshColor } = this.props;
	  
    if(backgroundColor !== prevProps.backgroundColor) {
      this.renderer.setClearColor(backgroundColor);
    }
    if(meshColor !== prevProps.meshColor) {
      if(this.model.type === 'Group') {
        this.model
          .children.forEach(child =>
          child.material.color.set(meshColor));
      } else {
        this.model.material.color.set(meshColor);
      }
      
    }
  }
  
  componentWillUnmount() {
    this.stop();
    // TODO Check if this is important or how to fit it
    // this.mount.removeChild(this.renderer.domElement);
  }
	
	loadObject() {
    const { file } = this.props;
    const fileExt = file.name.split('.').pop().toUpperCase();
    
    if(fileExt === 'OBJ') {
      const loader = new OBJLoader();
  
      loader.load(file.preview,
        model => {
          this.model = model;
      
          // FOR OBJ
          // model.children.forEach(child =>
          //   child.material.color && child.material.color.set(this.props.meshColor));
      
          this.scene.add(model);
  
          console.log(model);
  
          fitCameraToObject(this.camera, model, 7, this.controls);
          
          this.start();
          this.setState({ready: true});
        },
        xhr => {
          if (xhr.lengthComputable) {
            //TODO Show progress on preview canvas
            const percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
          }
        }
      );
    } else if(fileExt === 'STL'){
      const loader = new STLLoader();
      
      loader.load(file.preview, geometry => {
        geometry.center();
        const material = this.material;
        const model = new THREE.Mesh(geometry, material);
  
        this.model = model;
  
        this.scene.add(model);
  
        console.log(model);
  
        fitCameraToObject(this.camera, model, 7, this.controls);
        
        this.start();
        this.setState({ready: true});
      });
    } else {
      this.setState({error: 'Unsupported file type'});
    }
  
	}
	
	start = () => {
	  this.frameId = this.frameId || requestAnimationFrame(this.animate);
  };
	
	stop = () => {
	  cancelAnimationFrame(this.frameId);
	};
	
	animate = () => {
        setTimeout( () => this.frameId = requestAnimationFrame( this.animate ), 1000 / this.FPS );
		
		this.renderScene();
	};
	
	renderScene = () => {
	  this.renderer.render(this.scene, this.camera);
  };
	
	onSaveThumbnail() {
	  const {renderer, props: {onSaveThumbnail}} = this;
	  
    onSaveThumbnail(renderer
        .domElement
        .toDataURL("image/png"));
  }
	
	render() {
    return (
      <div className="text-center">
        <div style={{...this.canvas}}
             className="model-preview position-relative"
             ref={(previewContainer) => this.previewContainer = previewContainer}>
          {!this.state.ready ?
            <div className="placeholder position-absolute text-center">
              <span>{this.state.error || 'Please wait...'}</span>
            </div>
          : null}
        </div>
        <button className="btn btn-primary mt-2"
                type="button"
                onClick={this.onSaveThumbnail}>Save as thumbnail
        </button>
      </div>
    );
  }

}

export default ModelPreview;