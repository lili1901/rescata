import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss'],
})
export class PetsComponent  implements OnInit {

  pets: any[] | undefined;

  constructor(public navCtrl: Router, public petService: PetService) { }

  ngOnInit() {
    //inicializador de página
  }

  getListPets() {
    this.petService.getPets()
  }

  nextpage(){
    this.navCtrl.navigate(['/tabs/tab3/add']);
  }

}
