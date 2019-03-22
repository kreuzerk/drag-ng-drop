import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TeamCardComponent} from './team/team-card.component';
import {RouterModule} from '@angular/router';
import {TestOneComponent} from './testOne/test.one.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamCardComponent,
    TestOneComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    RouterModule.forRoot([
      {path: 'testOne', component: TestOneComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
