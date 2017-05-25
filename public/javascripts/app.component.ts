import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  template: `<div class="demo-layout-transparent mdl-layout mdl-js-layout">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title">TODO App</span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/home']">Home</a>
            <a class="mdl-navigation__link" [routerLink]="['/about']">About</a>
          </nav>
        </div>
      </header>
      <main class="mdl-layout__content">
        <router-outlet></router-outlet>
      </main>
      <!-- Router Outlet -->
    
    </div>
 `,
})
export class AppComponent  { 
	name = 'New application'; 
}