import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {UserComponent} from './user/user.component';


// Route Configuration
export const routes: Routes = [
	{
		path: 'home', 
		component: HomeComponent
	},
	{
		path: 'about', 
		component: AboutComponent
	},
	{
		path: 'user', 
		component: UserComponent
	},
	{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);