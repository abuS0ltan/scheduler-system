import { Routes } from '@angular/router';
import { StartPage } from './Pages/start-page/start-page.js';
import { MainApp } from './main-app/main-app.js';
import { ClientPage } from './Pages/client-page/client-page.js';
import { AppointmentPage } from './Pages/appointment-page/appointment-page.js';

export const routes: Routes = [
    {
        path:"app",
        component:MainApp,
        children:[
            {
                path:"client",
                component:ClientPage
            },
            {
                path:"appointment",
                component:AppointmentPage
            }
        ]
    },
    {
        path:"start",
        component:StartPage
    },
    {
        path:"**",
        redirectTo:"start"
    }
];
