import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { Nm4000PComponent } from '../nm-4000-p/nm-4000-p.component';
import { Nm2500SComponent } from '../nm-2500-s/nm-2500-s.component';
import { Nm2500DComponent } from '../nm-2500-d/nm-2500-d.component';
import { Nm2000Component } from '../nm-2000/nm-2000.component';
import { Nm90Component } from '../nm-90/nm-90.component';
import { Nm80Component } from '../nm-80/nm-80.component';
import { CervicalComponent } from '../cervical/cervical.component';
import { BraceletComponent } from '../bracelet/bracelet.component';
import { StonesComponent } from '../stones/stones.component';
import { WatchComponent } from '../watch/watch.component';

const routes: Routes = [
  { path: 'product', component: ProductsComponent, 
  children: [
    { path: '', component: Nm4000PComponent, pathMatch: 'full'},
    {  path: 'NM-4000P', component: Nm4000PComponent},
    {  path: 'NM-2500D', component: Nm2500DComponent },
    { path: 'NM-2500S', component: Nm2500SComponent },
    { path: 'NM-2000', component: Nm2000Component },
    { path: 'NM-90', component: Nm90Component },
    { path: 'NM-80', component: Nm80Component },
    { path: 'Cervical-Pillow', component: CervicalComponent },
    { path: 'Tourmanium-Stones', component: StonesComponent },
    { path: 'Tourmanium-Watch', component: WatchComponent },
    { path: 'Tourmanium-Bracelet', component: BraceletComponent },
  ]}

];





@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})
export class ProductRoutingModule { }
