import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HttpClientModule } from '@angular/common/http'
import { ProductListComponent } from './products/components/product-list/product-list.component'
import { MatGridListModule } from '@angular/material/grid-list'
@NgModule({
	declarations: [AppComponent, ProductListComponent],
	imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MatGridListModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
