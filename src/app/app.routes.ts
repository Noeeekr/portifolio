import { Routes } from '@angular/router';
import Home from "@pages/home";
import Web from "@pages/web";

export const routes: Routes = [
    { path: '', component: Home  },
    { path: 'web', component: Web },
];
