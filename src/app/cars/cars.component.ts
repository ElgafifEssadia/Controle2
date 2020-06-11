import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars = [
    {
      marque: "ford",
      numImatricul: "20-a-12548",
      nbSiege: "12",
      couleur: "rouge",
      image: '../../assets/ford.jpg'

    },
    {
      marque: "ford",
      numImatricul: "20-a-12548",
      nbSiege: "12",
      couleur: "rouge",
      image: '../../assets/ford.jpg'

    },
    {
      marque: "ford",
      numImatricul: "20-a-12548",
      nbSiege: "12",
      couleur: "rouge",
      image: '../../assets/ford.jpg'
      

    },
    {
      marque: "ford",
      numImatricul: "20-b-12548",
      nbSiege: "12",
      couleur: "bleu",
      image: '../../assets/ford2.jpg'

    },
    {
      marque: "ford",
      numImatricul: "20-b-12548",
      nbSiege: "12",
      couleur: "bleu",
      image: '../../assets/ford2.jpg'

    },
    {
      marque: "ford",
      numImatricul: "20-b-12548",
      nbSiege: "12",
      couleur: "bleu",
      image: '../../assets/ford2.jpg'

    }
];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToCarDetail(car) {
    
    this.router.navigate(["cardetails", JSON.stringify(car)]);
  }


}
