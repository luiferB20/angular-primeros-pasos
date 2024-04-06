import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {mainPageComponent} from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add/addCharacter.component';




@NgModule({
  declarations: [
    mainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports:[
    mainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
