import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';
import { PetsComponent } from '../pets/pets.component';

const routes: Routes = [
  {
    path: '',
    component: PetsComponent,
  },
  {
    path: 'pets',
    loadChildren: () => import('../pets/pets.module').then(m => m.PetsModule)
  },
  {
    path: 'add',
    loadChildren: () => import('../create-pet/create-pet.module').then(m => m.CreatePetModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
