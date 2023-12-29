import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent, SecondaryHeaderComponent } from './components';



@NgModule({
  declarations: [
    DefaultFooterComponent,
    SecondaryHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultFooterComponent,
    SecondaryHeaderComponent,
  ],
})
export class SharedModule { }
