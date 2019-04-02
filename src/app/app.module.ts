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
import {PrimengSortgridComponent} from './primeng/primeng.sortgrid.component';
import {DragDropModule as PrimengDragAndDrop} from 'primeng/dragdrop';

@NgModule({
  declarations: [
    AppComponent,
    TeamCardComponent,
    TestOneComponent,
    SortGridComponent,
    SortableJSComponent,
    DragulaComponent,
    PrimengSortgridComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    PrimengDragAndDrop,
    DragulaModule.forRoot(),
    RouterModule.forRoot([
      {path: 'cdkTest', component: TestOneComponent},
      {path: 'cdkSortGrid', component: SortGridComponent},
      {path: 'sortableJSSortGrid', component: SortableJSComponent},
      {path: 'dragulaSortGrid', component: DragulaComponent},
      {path: 'primengSortGrid', component: PrimengSortgridComponent},
      {path: '', redirectTo: 'dragula', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
