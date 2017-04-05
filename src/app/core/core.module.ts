import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DetectorService } from './detector.service';
/**
 * Consider collecting numerous, auxiliary, single-use classes inside a core module to simplify the apparent structure of a feature module.
 * Do put a singleton service whose instance will be shared throughout the application in the CoreModule (e.g. ExceptionService and LoggerService).
 * Do import all modules required by the assets in the CoreModule
 * Do import all modules required by the assets in the CoreModule (e.g. CommonModule and FormsModule).
 * Why? CoreModule provides one or more singleton services.
 * Angular registers the providers with the app root injector,
 * making a singleton instance of each service available to any component that needs them, whether that component is eagerly or lazily loaded.
 * CoreModule will contain singleton services.
 * When a lazy loaded module imports these, it will get a new instance and not the intended app-wide singleton (not good!).
 * Do gather application-wide, single use components in the CoreModule.
 * Import it once (in the AppModule) when the app starts and never import it anywhere else. (e.g. NavComponent and SpinnerComponent).
 * DON'T import the CoreModule anywhere except in the AppModule.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  exports: [
    FormsModule,
    HttpModule,
  ],
  declarations: [],
  providers: [
    DetectorService,
  ]
})
export class CoreModule { }
