import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cardetails',
  templateUrl: './cardetails.component.html',
  styleUrls: ['./cardetails.component.scss']
})
export class CardetailsComponent implements OnInit {

  car = {
      marque: "",
      numImatricul: "",
      nbSiege: "",
      couleur: "",
      image: ''
    
  };


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(JSON.parse(this.activatedRoute.snapshot.params.car));
    this.car = JSON.parse(this.activatedRoute.snapshot.params.car);
  }

}
