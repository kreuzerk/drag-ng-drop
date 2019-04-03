import {Component} from '@angular/core';

@Component({
  selector: 'sorable-list-demo',
  templateUrl: './sortable-list.demo.component.html'
})
export class SortableListDemoComponent {

  public items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public clubs = [
    {name: 'Real Madrid', captain: 'Sergio Ramos'},
    {name: 'FC Barcelona', captain: 'Lionel Messi'},
    {name: 'FC Liverpool', captain: 'Jordan Henderson'},
    {name: 'FC Chelsea', captain: 'David Luiz'},
    {name: 'Atletico Madrid', captain: 'Diego Godin'}
  ];

  logClubName(clubname: string) {
    console.log('Clubname', clubname);
  }
}
