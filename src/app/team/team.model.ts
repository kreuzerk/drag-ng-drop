export interface Team {
  league: League;
  name: string;
  description: string;
}

export enum League {
  LA_LIGA = 'LALIGA',
  PREMIERLEAGUE = 'PREMIERLEAGUE'
}
