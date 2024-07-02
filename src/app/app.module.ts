import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FraganciaListComponent } from './fragancia-list/fragancia-list.component';

import { FormsModule } from '@angular/forms';
import { FraganciaAboutComponent } from './fragancia-about/fragancia-about.component';
import { PerfumeryFraganciasComponent } from './perfumery-fragancias/perfumery-fragancias.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FraganciaListComponent,
    FraganciaAboutComponent,
    PerfumeryFraganciasComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ 
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
