import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

const MaterialCompomnents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MaterialCompomnents
  ]
})



export class MaterialModule {}

