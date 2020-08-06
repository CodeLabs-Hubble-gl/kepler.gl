export function setKeyframes(cameraType, adapter, mapdataGlobal){
    adapter.scene.keyframes.camera._lastTime = 0;
    adapter.scene.keyframes.camera.factor = 0;
  
    
    adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude;
    adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude;
    adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude;
    adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude;
    adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
    adapter.scene.keyframes.camera.values[1].zoom = mapdataGlobal.mapState.zoom;
    
        if(cameraType === 'Orbit (90º)'){
            // How to reset the camera to its initial position?
            adapter.scene.keyframes.camera.values[0].bearing = 0;
            adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude;
            adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude;
            adapter.scene.keyframes.camera.values[0].pitch = 0;
            adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
    
            adapter.scene.keyframes.camera.values[1].bearing = 90;
            adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude;
            adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude;
            adapter.scene.keyframes.camera.values[1].pitch = 0;
            adapter.scene.keyframes.camera.values[1].zoom = mapdataGlobal.mapState.zoom;
        }else if(cameraType === 'Orbit (180º)'){
          adapter.scene.keyframes.camera.values[0].bearing = 0;
          adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[0].pitch = 0;
          adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
  
          adapter.scene.keyframes.camera.values[1].bearing = 180;
          adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[1].pitch = 0;
          adapter.scene.keyframes.camera.values[1].zoom = mapdataGlobal.mapState.zoom;
        }else if(cameraType === 'Orbit (360º)'){
          adapter.scene.keyframes.camera.values[0].bearing = 0;
          adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[0].pitch = 0;
          adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
  
          adapter.scene.keyframes.camera.values[1].bearing = 360;
          adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[1].pitch = 0;
          adapter.scene.keyframes.camera.values[1].zoom = mapdataGlobal.mapState.zoom;
        }else if(cameraType === 'North to South'){
          adapter.scene.keyframes.camera.values[0].bearing = 0;
          adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude + 25;
          adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[0].pitch = 0;
          adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
  
          adapter.scene.keyframes.camera.values[1].bearing = 0;
          adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude - 25;
          adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[1].pitch = 0;
          adapter.scene.keyframes.camera.values[1].zoom = mapdataGlobal.mapState.zoom;
        }else if(cameraType === 'South to North'){
          adapter.scene.keyframes.camera.values[0].bearing = 0;
          adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude - 25;
          adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[0].pitch = 0;
          adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
  
          adapter.scene.keyframes.camera.values[1].bearing = 0;
          adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude + 25;
          adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[1].pitch = 0;
          adapter.scene.keyframes.camera.values[1].zoom = mapdataGlobal.mapState.zoom;
        }else if(cameraType === 'East to West'){
          adapter.scene.keyframes.camera.values[0].bearing = 0;
          adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude + 25;
          adapter.scene.keyframes.camera.values[0].pitch = 0;
          adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
  
          adapter.scene.keyframes.camera.values[1].bearing = 0;
          adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude - 25;
          adapter.scene.keyframes.camera.values[1].pitch = 0;
          adapter.scene.keyframes.camera.values[1].zoom = mapdataGlobal.mapState.zoom;
        }else if(cameraType === 'West to East'){
          adapter.scene.keyframes.camera.values[0].bearing = 0;
          adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude - 25;
          adapter.scene.keyframes.camera.values[0].pitch = 0;
          adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
  
          adapter.scene.keyframes.camera.values[1].bearing = 0;
          adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude + 25;
          adapter.scene.keyframes.camera.values[1].pitch = 0;
          adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
        }else if(cameraType === 'Zoom Out'){
          adapter.scene.keyframes.camera.values[0].bearing = 0;
          adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[0].pitch = 0;
          adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
  
          adapter.scene.keyframes.camera.values[1].bearing = 0;
          adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[1].pitch = 0;
          adapter.scene.keyframes.camera.values[1].zoom = mapdataGlobal.mapState.zoom - 2;
        }else if(cameraType === 'Zoom In'){
          adapter.scene.keyframes.camera.values[0].bearing = 0;
          adapter.scene.keyframes.camera.values[0].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[0].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[0].pitch = 0;
          adapter.scene.keyframes.camera.values[0].zoom = mapdataGlobal.mapState.zoom;
  
          adapter.scene.keyframes.camera.values[1].bearing = 0;
          adapter.scene.keyframes.camera.values[1].latitude = mapdataGlobal.mapState.latitude;
          adapter.scene.keyframes.camera.values[1].longitude = mapdataGlobal.mapState.longitude;
          adapter.scene.keyframes.camera.values[1].pitch = 0;
          adapter.scene.keyframes.camera.values[1].zoom = mapdataGlobal.mapState.zoom + 2;
        }      
  
      
       console.log("adapter", adapter);
  }