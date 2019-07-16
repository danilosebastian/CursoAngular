import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-heroes',
  templateUrl: './busqueda-heroes.component.html',
  styleUrls: ['./busqueda-heroes.component.css']
})
export class BusquedaHeroesComponent implements OnInit {

  heroes: any[] = [];
  termino = '';

  constructor(private serviceHeroe: HeroesService,
              private activatedRoute: ActivatedRoute) {

          }
  ngOnInit() {
        this.activatedRoute.params.subscribe(p => {
        this.termino = p.termino;
        this.heroes = this.serviceHeroe.buscarHeroes(p.termino);
        console.log(this.heroes);
      });
  }
}
