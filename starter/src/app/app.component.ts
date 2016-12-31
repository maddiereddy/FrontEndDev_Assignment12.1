import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent{
    private users: any[] = [
        {name: 'Mahesh', type: 'private'},
        {name: 'Naren', type: 'public'},
        {name: 'Amit', type: 'private'},
        {name: 'Sara', type: 'private'},
        {name: 'Raina', type: 'public'},
        {name: 'Veda', type: 'public'},
        {name: 'Damodar', type: 'public'},
        {name: 'Darla', type: 'private'}
  ]
}
