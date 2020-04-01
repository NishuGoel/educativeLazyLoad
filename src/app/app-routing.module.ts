import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {
  path: 'hello',
  loadChildren: () => import('./hello/hello.module').then(mod => mod.HelloModule)
  // component: HelloComponent
},
{
  path: 'main-page',
  component: MainPageComponent
},
  {
  path: '',
  redirectTo: '/main-page',
  pathMatch: 'full'
},
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// , { useHash: true }