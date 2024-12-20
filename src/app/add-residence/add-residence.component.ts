import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
})
export class AddResidenceComponent {
  residenceform!: FormGroup;
  idR!: number;
  residence!: Residence;
  constructor(
    private route: Router,
    private rs: ResidenceService,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //1- recuperer l'id depuis l'url
    this.idR = this.ac.snapshot.params['idR'];
    //2. récupere l'objet relatif à l'id
    this.rs.getResidenceById(this.idR).subscribe((res) => {
      this.residence = res;
      console.log(this.residence);
      //3 remplir le formulaire avec l'objet recuperer
      this.residenceform.patchValue(this.residence);
    });

    this.residenceform = new FormGroup({
      id: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]/),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[A-Z]/),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      image: new FormControl('', Validators.required),
      status: new FormControl('', [Validators.required]),
    });
  }

  get id() {
    return this.residenceform.get('id');
  }
  get name() {
    return this.residenceform.get('name');
  }
  get address() {
    return this.residenceform.get('address');
  }
  get status() {
    return this.residenceform.get('status');
  }

  add() {
    if (this.idR) {
      this.rs
        .updateResidence(this.residenceform.value, this.idR)
        .subscribe(() => this.route.navigate(['/residences']));
    } else {
      this.rs.addResidence(this.residenceform.value).subscribe(() => {
        console.log('added!!!!');
        this.route.navigate(['/residences']);
      });
      console.log(
        'Form residence : ' + JSON.stringify(this.residenceform.value)
      );
    }
  }
}
