import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Services
import { AuthService } from './auth.service';
import { CartService } from './cart.service';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CartComponent } from './cart/cart.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { PoliciesComponent } from './policies/policies.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { path: '',                    component: HomeComponent },
  { path: 'search',              component: SearchPageComponent },
  { path: 'product/:slug',       component: ProductComponent },
  { path: 'cart',                component: CartComponent },
  { path: 'enquiries',           component: EnquiriesComponent },
  { path: 'policies',            component: PoliciesComponent },
  { path: '404',                 component: PageNotFoundComponent },
  { path: '**',                  component: PageNotFoundComponent }
];


var firebaseConfig = {
  apiKey: "AIzaSyBjTyO5q7WyxRuqyNnSwyXJsv_PzcnBLoo",
  authDomain: "subscriptions-cb99c.firebaseapp.com",
  databaseURL: "https://subscriptions-cb99c.firebaseio.com",
  projectId: "subscriptions-cb99c",
  storageBucket: "",
  messagingSenderId: "583676567943"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    HomeComponent,
    SearchPageComponent,
    PageNotFoundComponent,
    SearchFormComponent,
    CartComponent,
    EnquiriesComponent,
    PoliciesComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ScrollToModule.forRoot()
  ],
  providers: [ AuthService, CartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
