import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes: string[] = ['SpiderMan','Iroman', 'Hulk', 'Thor'];
  // alamacenarBorrado: string[] = [];
  almacenarBorrado: string = '';

  borrarHeroe():void{
    this.almacenarBorrado = this.heroes.shift() || '';
    // this.alamacenarBorrado.push(heroeBorrado!);
    // const heroeBorrado = this.heroes.pop();
    // console.log(this.alamacenarBorrado);
  }



}
