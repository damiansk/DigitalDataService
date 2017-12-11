import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import OBJLoader from '../../../utils/OBJLoader';

import './ModelPreview.css';

class ModelPreview extends Component {
	
	constructor(props) {
		super(props);
		
		this.FPS = 24;
		
		this.canvas = {
      width: '820px',
      height: '820px',
      margin: '0 auto'
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
    
    this.renderer = renderer;
    this.light = directionalLight;
		this.scene = scene;
		this.camera = camera;
		this.renderer = renderer;
		this.controls = controls;
		
		this.previewContainer.appendChild(this.renderer.domElement);
		this.start();
    
    this.loadObject();
	}
	
	componentDidUpdate(prevProps, prevState) {
	  const { backgroundColor, meshColor } = this.props;
	  
    if(backgroundColor !== prevProps.backgroundColor) {
      this.renderer.setClearColor(backgroundColor);
    }
    if(meshColor !== prevProps.meshColor) {
      this.model
        .children.forEach(child =>
          child.material.color.set(meshColor));
    }
  }
  
  componentWillUnmount() {
    this.stop();
    // TODO Check if this is important or how to fit it
    // this.mount.removeChild(this.renderer.domElement);
  }
	
	loadObject() {
    const loader = new OBJLoader();
    
		const { file } = this.props;
    loader.load(file.preview,
      model => {
        this.model = model;
        
        model.children.forEach(child => child.material.color.set(this.props.meshColor));
  
        this.scene.add(model);
   
        //TODO Resolve how do this better
        const bb = new THREE.Box3();
        bb.setFromObject(this.model);
        bb.getCenter(this.controls.target);
      },
      xhr => {
        if (xhr.lengthComputable) {
          //TODO Show progress on preview canvas
          const percentComplete = xhr.loaded / xhr.total * 100;
          console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
      }
    );
  
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
        <div style={{ ...this.canvas }}
             className="model-preview"
             ref={(previewContainer) => this.previewContainer = previewContainer} />
        <button className="btn btn-primary mt-2"
                type="button"
                onClick={this.onSaveThumbnail}>Save as thumbnail</button>
      </div>
		)
	}

}

export default ModelPreview;