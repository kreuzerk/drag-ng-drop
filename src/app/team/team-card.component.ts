import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {League, Team} from './team.model';

@Component({
  selector: 'app-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnChanges {

  @Input() team: Team;
  public backgroundClass: string;

  ngOnChanges(changes: SimpleChanges): void {
    const teamChanges = changes.team.currentValue;
    const league = teamChanges.league;

    switch (league) {
      case League.LA_LIGA:
        this.backgroundClass = 'bg-primary';
        break;
      case League.PREMIERLEAGUE:
        this.backgroundClass = 'bg-success';
        break;
    }
  }
}
