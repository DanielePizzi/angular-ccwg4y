import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path:"thanks", component:ThankyouComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:false,useHash:true})
  ],
  declarations: []
})
export class AppRoutingModuleModule { }