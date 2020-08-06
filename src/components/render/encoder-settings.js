import React, {Component} from 'react';

export const encoderSettings = {
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
      quality: 1.5
    },
    filename: "Default Video Name" + " " + moment().format(DEFAULT_TIME_FORMAT).toString()
  };