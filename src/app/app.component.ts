import { Component } from '@angular/core';
import names from './names.json';
//import {Pipe, PipeTransform} from '@angular/core'


interface Item {
  name: string;
  amount: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})





export class AppComponent {
  title = 'Name application';



  public list: Item[] = names.names;
  public name: any;
  public maara;
  public value;
  public result;

  findName;

  constructor(){
    console.log('names', names);
    console.log('list', this.list);
    this.name = this.list[0];
    //this.byAmount();
    //this.byAlpha();
    //this.getTotal();
  }


  
  byAmount() {
    this.list.sort((left, right): number =>{
      if (left.amount > right.amount) return -1;
      if (left.amount < right.amount) return 1;
      return 0;
    });
  }

  byAlpha(){
    this.list.sort((left, right): number =>{
      if (left.name < right.name) return -1;
      if (left.name > right.name)return 1;
      return 0;
    });
  }

  getTotal(){
    this.maara = 0;
    this.list.forEach(rivi => {
      this.maara = this.maara + rivi.amount
      return 0;
    });
  }

}


