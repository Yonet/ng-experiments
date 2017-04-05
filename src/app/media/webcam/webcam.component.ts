import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer,
} from '@angular/core';

import { MediaService } from '../media.service';

const constraints = {
  audio: false,
  video: true
}

@Component({
  selector: 'ay-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})
export class WebcamComponent implements OnInit, AfterViewInit {

  public stream: MediaStream;
  private video: HTMLMediaElement;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
    private service: MediaService,
  ) { }

  ngOnInit() {
    this.video = this.elementRef.nativeElement;
  }

  handleVideo(stream) {

    console.log('stream', stream);
    stream.onremovetrack = function() {
      console.log('ended');
    }

    stream.onactive = function() {
      console.log("active ", stream)
    }

  }


  ngAfterViewInit() {

    navigator.mediaDevices.getUserMedia(constraints)
      .then(this.handleVideo);

  }

}
