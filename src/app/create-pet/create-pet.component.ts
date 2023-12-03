import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../services/photo.service';
import { PetService } from '../services/pet.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss'],
})
export class CreatePetComponent  implements OnInit {

  petForm!: FormGroup;
  formDataFile = {
    name: '',
    file: null as Blob | null,
  };

  constructor(public formBuilder: FormBuilder, public photoService: PhotoService,
    public petService: PetService, public route: Router) { }

  ngOnInit() {
    this.petForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      especie: ['', [Validators.required, Validators.minLength(2)]],
      color: ['', [Validators.required, Validators.minLength(2)]]
    });

  };

  submitForm = () => {
    if (this.petForm.valid) {
      console.log(this.petForm.value);
      const blob = new Blob([this.formDataFile.file as BlobPart]);

      const formData = new FormData();
      formData.append("file", blob, this.formDataFile.name);
      formData.append("nombre", this.petForm.controls['nombre'].value);
      formData.append("color", this.petForm.controls['color'].value);
      formData.append("especie", this.petForm.controls['especie'].value);
      console.log(formData);
      this.petService.save(formData).subscribe(
        response => {
          console.log('Upload successful:', response);
          this.route.navigate(['/tabs/tab3'])
        },
        error => {
          console.error('Error uploading:', error);
        }
      );
      return false;
    } else {
      return console.log('¡Por favor revisa todos los campos requeridos!');
    }
  };

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  onFileSelected(event: any) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      this.formDataFile.file = fileList[0];
      this.formDataFile.name = fileList[0].name;
    }
  }

  nextpage(){
    this.route.navigate(['/tabs/tab3']);
  }
//*ngFor="let list of item | async"
}
