import { Component } from '@angular/core';
import { User } from '../model/user.model'

@Component({
	templateUrl: '/app/user/user.html'
})

export class UserComponent{
	categories = ['Home', 'Office', 'Shopping'];
	model = new User('Narayanan', 'Ganapathi', true, 'R1', 'Shopping');
}