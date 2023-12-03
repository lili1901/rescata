import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePetComponent } from './create-pet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreatePetRoutingModule } from './create-pet-routing.module';



@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, CreatePetRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [CreatePetComponent],
  exports: [CreatePetComponent]
})
export class CreatePetModule { }
