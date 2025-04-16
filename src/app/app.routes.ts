import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AreaPersonaleComponent } from './area-personale/area-personale.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {path: "login", component: LoginComponent},
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "about_us", component:   AboutUsComponent},
    {path: "register", component: RegisterComponent},
    {path: "contacts", component: ContactsComponent},
    {path: "area-personale", component: AreaPersonaleComponent},
    {path: "account", component: AccountComponent},
];
