import { Component, Input } from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'hello',
  template: `<h1>Hello from the routed component.</h1>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
   constructor(private router: Router){
    this.router.events.subscribe( (event: RouterEvent) => console.log(event))
  }
}