import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebcamComponent } from './webcam/webcam.component';
import { MediaService } from './media.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [WebcamComponent],
  providers: [MediaService],
  declarations: [WebcamComponent]
})
export class MediaModule { }
