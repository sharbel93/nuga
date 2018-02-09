import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { Nm4000PComponent } from './nm-4000-p/nm-4000-p.component';
import { Nm2500SComponent } from './nm-2500-s/nm-2500-s.component';
import { Nm2500DComponent } from './nm-2500-d/nm-2500-d.component';
import { Nm2000Component } from './nm-2000/nm-2000.component';
import { Nm90Component } from './nm-90/nm-90.component';
import { Nm80Component } from './nm-80/nm-80.component';
import { CervicalComponent } from './cervical/cervical.component';
import { StonesComponent } from './stones/stones.component';
import { WatchComponent } from './watch/watch.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { ProductRoutingModule } from '../app/product-routing/product-routing.module';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';
// import { AngularFireAuthModule } from 'angularfire2/auth';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ContactComponent,
    HeaderComponent,
    Nm4000PComponent,
    Nm2500SComponent,
    Nm2500DComponent,
    Nm2000Component,
    Nm90Component,
    Nm80Component,
    CervicalComponent,
    StonesComponent,
    WatchComponent,
    BraceletComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,ProductRoutingModule 
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    // AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
