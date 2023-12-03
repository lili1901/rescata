import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PetsComponent } from './pets.component';
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';
import { PetsRoutingModule } from './pets-routing.module';



@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, PetsRoutingModule],
  declarations: [PetsComponent],
  exports: [PetsComponent]
})
export class PetsModule { }
