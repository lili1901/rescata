import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public list: any[];
  perfil = '';

  constructor() {
    this.list = [];
    //Cambiar de acuerdo al perfil
    //this.perfil = 'organization';
    this.perfil = 'public';

    if (this.perfil == 'organization') {
      this.getMenuOrganization();
    } else {
      this.getMenuPublic();
    }
  }

  getMenuOrganization() {
    this.list = [
      { nombre: 'Mi organización', url: '/tabs/tab2', icon: 'planet-outline' },
      { nombre: 'En adopción', url: '/tabs/tab3', icon: 'search-circle-outline' },
      { nombre: 'Preguntas frecuentes', url: '', icon: 'help-circle-outline' }
    ];
  }

  getMenuPublic() {
    this.list = [
      { nombre: 'Adoptar', url: '/tabs/tab3', icon: 'heart-circle-outline' },
      { nombre: 'Preguntas frecuentes', url: '/algo', icon: 'help-circle-outline' }
    ];
  }
}
