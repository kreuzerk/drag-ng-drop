import {Component, OnInit} from '@angular/core';
import {League, Team} from '../team/team.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-testone',
  templateUrl: './test.one.component.html'
})
export class TestOneComponent implements OnInit {
  public teams: Team[] = [];

  ngOnInit(): void {
    this.teams.push(this.createTem(League.LA_LIGA, 'Real Madrid', 'Best club ever'));
    this.teams.push(this.createTem(League.LA_LIGA, 'FC Barcelona', 'Worst club ever'));
    this.teams.push(this.createTem(League.LA_LIGA, 'Atletico Madrid', 'Enemies'));
    this.teams.push(this.createTem(League.LA_LIGA, 'Getafe', 'Small club from Madrid'));
    this.teams.push(this.createTem(League.PREMIERLEAGUE, 'Manchester United', 'Club with a huge history'));
    this.teams.push(this.createTem(League.PREMIERLEAGUE, 'Liverpool', 'Club with a awesome entry song'));
    this.teams.push(this.createTem(League.PREMIERLEAGUE, 'Man City', 'Current Champions of England'));
    this.teams.push(this.createTem(League.PREMIERLEAGUE, 'Leicester', 'Surprising Champions'));
  }

  private createTem(league: League, teamName: string, description: string): Team {
    return {league, name: teamName, description};
  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log('Event', event);
    moveItemInArray(this.teams, event.previousIndex, event.currentIndex);
  }
}
