import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Casas} from "../../../model/casas";
import {CasasService} from "../../../services/casas.service";
@Component({
  selector: 'app-find-house',
  templateUrl: './find-house.component.html',
  styleUrls: ['./find-house.component.css']
})
export class FindHouseComponent implements OnInit{
  Houses:Casas[]=[];
  pais: string;
  ciudad: string;
  direccion: string;
  precio: number;
  capacidad: number;
  estrellas: number;

  constructor(private router: Router ,private casaService: CasasService){
    this.pais = '';
    this.ciudad = '';
    this.direccion = '';
    this.precio = 0;
    this.capacidad = 0;
    this.estrellas = 0;
  }

  ngOnInit() {
    this.casaService.getAll().subscribe((response:any)=>{
      this.Houses=response
    })
  }

  onFilter(){
    var filteredHouses = [...this.Houses];
    if (this.pais) {
      filteredHouses = filteredHouses.filter(house => house.country.toLowerCase().includes(this.pais.toLowerCase()));
    }
    if (this.ciudad) {
      filteredHouses = filteredHouses.filter(house => house.city.toLowerCase().includes(this.ciudad.toLowerCase()));
    }
    if (this.direccion){
      filteredHouses = filteredHouses.filter(house => house.streetAddress.toLowerCase().includes(this.direccion.toLowerCase()));
    }
    if (this.precio !== null && this.precio !== undefined) {
      const precioFormateado = `$${this.precio}`;
      filteredHouses = filteredHouses.filter(house => house.price.toString() === precioFormateado);
    }
    if (this.capacidad) {
      filteredHouses = filteredHouses.filter(house => house.capacity == this.capacidad);
    }
    if (this.estrellas) {
      filteredHouses = filteredHouses.filter(house => house.rating == this.estrellas);
    }
    this.Houses = filteredHouses;
  }
  toReset(){
    this.pais = '';
    this.ciudad = '';
    this.direccion = '';
    this.precio = 0;
    this.capacidad = 0;
    this.estrellas = 0;
    this.casaService.getAll().subscribe((response: any) => {
      this.Houses = response;
    });
  }

  goToKeeper(){
    this.router.navigateByUrl('/home-keeper');
  }
  goToMessenger(){
    this.router.navigateByUrl('/messenger-keeper');
  }
  goToProfile(){
    this.router.navigateByUrl('/profile-keeper');
  }
  goToLogin(){
    this.router.navigateByUrl('/login');
  }
}
