import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModuleModule],
  declarations: [AppComponent,ThankyouComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
