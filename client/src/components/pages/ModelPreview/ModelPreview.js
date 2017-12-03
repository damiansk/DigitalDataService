import React, { Component } from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';

import OBJLoader from '../../../utils/OBJLoader';

import './ModelPreview.css';

class ModelPreview extends Component {
	
	constructor(props) {
		super(props);
		
		this.FPS = 24;
		
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
		const material = new THREE.MeshLambertMaterial({ color: 0xff00ff });
		
		camera.position.z = 5;
		renderer.setClearColor('#000000');
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
		this.material = material;
		
		this.previewContainer.appendChild(this.renderer.domElement);
		this.start();
    
    this.loadObject();
	}
	
	loadObject() {
    const loader = new OBJLoader();
        
		const { file } = this.props;
    loader.load(file.preview,
      model => {
        this.model = model;
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
	
	componentWillUnmount() {
		this.stop();
		// TODO Check if this is important or how to fit it
		// this.mount.removeChild(this.renderer.domElement);
	}
	
	start = () => this.frameId = this.frameId || requestAnimationFrame(this.animate);
	
	stop = () => cancelAnimationFrame(this.frameId);
	
	animate = () => {
        setTimeout( () => this.frameId = requestAnimationFrame( this.animate ), 1000 / this.FPS );
		
		this.renderScene();
	};
	
	renderScene = () => this.renderer.render(this.scene, this.camera);
	
	onSaveThumbnail() {
	  const {renderer, props: {onSaveThumbnail}} = this;
	  
    onSaveThumbnail(renderer
        .domElement
        .toDataURL("image/png"));
  }
	
	render() {
		return (
      <div>
        <div style={{ width: '720px', height: '720px', margin: '0 auto' }}
             className="model-preview"
             ref={(previewContainer) => this.previewContainer = previewContainer} />
        <button className="btn btn-primary"
                type="button"
                onClick={this.onSaveThumbnail}>Save as thumbnail</button>
      </div>
		)
	}

}

export default ModelPreview;