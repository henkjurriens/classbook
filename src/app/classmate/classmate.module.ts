import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassmatePageRoutingModule } from './classmate-routing.module';

import { ClassmatePage } from './classmate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassmatePageRoutingModule
  ],
  declarations: [ClassmatePage]
})
export class ClassmatePageModule {}
