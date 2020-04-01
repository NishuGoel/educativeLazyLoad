import { NgModule } from '@angular/core';
import {HelloRoutingModule} from './hello-routing.module';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:  [HelloRoutingModule ],
  declarations: [HelloComponent],
})
export class HelloModule { }