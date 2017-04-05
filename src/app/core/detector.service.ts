import { Injectable } from '@angular/core';

/**
 * This service detects user browser, media, device, OS...
 * @return {[type]} [description]
 */
@Injectable()
export class DetectorService {

  constructor() { }

  detectBrowser() { }

  detectCamera() {

  }

  detectWebGL() {

  }
  // 
  // getUserMedia() {
  //   return navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
  // }
}
