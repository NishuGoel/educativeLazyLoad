import { Component, Input } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'main-page',
  template: `<h1>Hello from the main page component.</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class MainPageComponent  {
  // constructor(private router: Router){
  //   this.router.events.subscribe( (event: RouterEvent) => console.log(event))
  // }
}