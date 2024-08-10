import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'', redirectTo:'about' , pathMatch:'full' },
    {path:'about', component:AboutComponent, title:'About'},
    {path:'portfolio', component:PortfolioComponent, title:'Portfolio'},
    {path:'contact', component:ContactComponent, title:'Contact'},
    {path:'**', component:NotFoundComponent},
];
