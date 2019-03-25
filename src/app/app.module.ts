import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {TeamCardComponent} from './team/team-card.component';
import {RouterModule} from '@angular/router';
import {TestOneComponent} from './testOne/test.one.component';
import {SortGridComponent} from './sort-grid/sort-grid.component';
import {SortableJSComponent} from './sortableJS/sortableJS.component';
import {DragulaComponent} from './dragula/dragula.component';
import {DragulaModule} from 'ng2-dragula';

@NgModule({
  declarations: [
    AppComponent,
    TeamCardComponent,
    TestOneComponent,
    SortGridComponent,
    SortableJSComponent,
    DragulaComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    DragulaModule.forRoot(),
    RouterModule.forRoot([
      {path: 'testOne', component: TestOneComponent},
      {path: 'sortGrid', component: SortGridComponent},
      {path: 'appSortableJS', component: SortableJSComponent},
      {path: 'dragula', component: DragulaComponent},
      {path: '', redirectTo: 'dragula', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
