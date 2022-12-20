import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import mateial模組
import { MaterialModule } from './material/material.module'

import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }


