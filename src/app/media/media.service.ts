import { Injectable } from '@angular/core';

@Injectable()
export class MediaService {

  public getUserMedia: any;

  constructor() {
    this.getUserMedia = navigator.mediaDevices.getUserMedia;
  }

  mediaError(er) {
    console.error('Media failed ', er);
  }

}
