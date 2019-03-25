import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TeamCardComponent} from './team/team-card.component';
import {RouterModule} from '@angular/router';
import {TestOneComponent} from './testOne/test.one.component';
import {SortGridComponent} from './sort-grid/sort-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamCardComponent,
    TestOneComponent,
    SortGridComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    RouterModule.forRoot([
      {path: 'testOne', component: TestOneComponent},
      {path: 'sortGrid', component: SortGridComponent},
      {path: '', redirectTo: 'sortGrid', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
