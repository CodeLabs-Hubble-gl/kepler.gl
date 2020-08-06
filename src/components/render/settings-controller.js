import React, {Component} from 'react';
import {DeckScene, CameraKeyframes} from '@hubble.gl/core';
import {easing} from 'popmotion';
import {DeckAdapter} from 'hubble.gl';

import {
    WebMEncoder,
    JPEGSequenceEncoder,
    PNGSequenceEncoder,
    PreviewEncoder,
    GifEncoder
  } from '@hubble.gl/core';

import {DEFAULT_TIME_FORMAT} from 'constants';
import moment from 'moment';

let mapDataGlobal = null;

const encoderSettings = {
    framerate: 30,
    webm: {
      quality: 0.8
    },
    jpeg: {
      quality: 2
    },
    gif: {
      sampleInterval: 1000
    },
    webm:{
      quality: 1
    },
    filename: "Default Video Name" + " " + moment().format(DEFAULT_TIME_FORMAT).toString()
  };

export class SettingsController extends Component{
    constructor(props) {
        super(props);
     
        // I need to pass mapDataGlobal to be used here
      }

      static defaultProps = {
         adapter: new DeckAdapter(sceneBuilder) 
      };
      
}
   
 function sceneBuilder(animationLoop) {
  console.log(" this.props.mapDataGlobal",  mapDataGlobal);
    const data = {};
    const keyframes = {
      camera: new CameraKeyframes({
        timings: [0, 1000],
        keyframes: [
          {
            longitude: mapDataGlobal.mapState.longitude,
            latitude: mapDataGlobal.mapState.latitude,
            zoom: mapDataGlobal.mapState.zoom,
            pitch: 0,
            bearing: 0
          /*  longitude: 11,
            latitude: 0,
            zoom: 2,
            pitch: 0,
            bearing: 0*/
          },
          {
            longitude: mapDataGlobal.mapState.longitude,
            latitude: mapDataGlobal.mapState.latitude,
            zoom: mapDataGlobal.mapState.zoom,
            bearing: 0,
            pitch: 0
          /*  longitude: 11,
            latitude: 0,
            zoom: 2,
            pitch: 0,
            bearing: 0*/
          }
        ],
        easings: [easing.easeInOut]
      })
    };
    animationLoop.timeline.attachAnimation(keyframes.camera);
  
    // TODO: Figure out how to set up the size 
    return new DeckScene({
      animationLoop,
      keyframes,
      lengthMs: 1000,
      data,
     width: 480,
     height: 460
    });
  }
  
  export function preview(adapter) {
    adapter.render(PreviewEncoder, encoderSettings, ()=>{});
  }
  
  export function setFileNameDeckAdapter(name){
    encoderSettings.filename = name + " " + moment().format(DEFAULT_TIME_FORMAT).toString();
  }

  export function render(settingsdata, adapter){

    //  setResolution(settingsdata.resolution); // Remove this
  
      if (settingsdata.mediaType === 'WebM Video') {
        adapter.render(WebMEncoder, encoderSettings, () => {}); // Onstop callback
      } else if (settingsdata.mediaType === 'PNG Sequence') {
        adapter.render(PNGSequenceEncoder, encoderSettings, () => {});
      } else if (settingsdata.mediaType === 'JPEG Sequence') {
        adapter.render(JPEGSequenceEncoder, encoderSettings, () => {});
      } 
    // preview();
    }

    /*function setResolution(resolution){
  if(resolution === 'Good (540p)'){
    adapter.scene.width = 960;
    adapter.scene.height = 540;
  }else if(resolution === 'High (720p)'){
    adapter.scene.width = 1280;
    adapter.scene.height = 720;
  }else if(resolution === 'Highest (1080p)'){
    adapter.scene.width = 1920;
    adapter.scene.height = 1080;
  }
}*/
