import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Victor';
  age: number = 25;
  job: string[] = ['Programador', 'Designer'];

  car = {
    name: 'Civic',
    year: 2021
  };

  constructor() {}

  ngOnInit(): void {}
}
