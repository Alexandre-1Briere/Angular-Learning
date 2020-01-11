import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  imageRelLink: string;
  id: number;
  name: string;
  type: string[];
  stats: Array<number>;

  constructor() { }

  ngOnInit() {
  }

}
