import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResidenceService } from '../core/services/residence.service';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent {
  id!:number;
  residence!:Residence;
  constructor(private act: ActivatedRoute, private rs:ResidenceService) {}


  ngOnInit(){
    this.id=this.act.snapshot.params['idR'];
    this.rs.getResidenceById(this.id).subscribe((res)=>this.residence=res);
  }

}
