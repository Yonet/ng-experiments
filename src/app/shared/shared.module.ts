import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Consider using the name SharedModule when the contents of a shared module are referenced across the entire application.
 * Do export all symbols from the SharedModule that other feature modules need to use.
 * Avoid specifying app-wide singleton providers in a SharedModule. Intentional singletons are OK. Take care.
 * Why? A lazy loaded feature module that imports that shared module will make its own copy of the service and likely have undesireable results.
 */
@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
  ],
  exports: [],
  declarations: []
})
export class SharedModule { }
