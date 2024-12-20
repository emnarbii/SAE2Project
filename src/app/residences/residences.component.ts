import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { CommonService } from '../core/services/common.service';
import { ResidenceService } from '../core/services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  residenceList: Residence[] = [];
  constructor(
    private route: Router,
    private commonservice: CommonService,
    private rs: ResidenceService
  ) {}
  search_item: string = '';

  ngOnInit() {
    // this.rs
    //   .addResidence({
    //     id: 5,
    //     name: 'Amitie',
    //     address: 'ariana',
    //     image: '../../assets/images/R4.jpg',
    //     status: 'Disponible',
    //   }).subscribe();
    this.rs.getResidenceList().subscribe((res) => (this.residenceList = res));

    console.log(
      this.commonservice.getSameValueOf(
        this.residenceList,
        'status',
        'Disponible'
      )
    );
  }

  favoris: Residence[] = [];

  showLocation(adress: string) {
    if (adress === 'inconnu') {
      alert("l'adresse est inconnu");
    } else {
      alert("l'adresse est" + adress);
    }
  }

  addFavorite(residence: Residence) {
    if (!this.favoris.includes(residence)) {
      this.favoris.push(residence);
    }
    console.log(this.favoris);
  }
  filtreByAddress() {
    return this.residenceList.filter((residance) =>
      residance.address.toLowerCase().includes(this.search_item.toLowerCase())
    );
  }

  delete(id: number) {
    this.rs.deleteResidence(id).subscribe(() => this.ngOnInit());
  }
}
