import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { PblNgridModule, PblNgridRegistryService } from '@pebula/table';
import { PblNgridDragModule } from '@pebula/table/drag';
import { PblNgridTargetEventsModule } from '@pebula/table/target-events';
import { PblNgridTransposeModule } from '@pebula/table/transpose';
import { PblNgridBlockUiModule } from '@pebula/table/block-ui';
import { PblNgridDetailRowModule } from '@pebula/table/detail-row';
import { PblNgridStickyModule } from '@pebula/table/sticky';
import { PblNgridMaterialModule } from '@pebula/table/material';

import { SharedModule, ExampleGroupRegistryService } from '@pebula/apps/table/shared';
import { StoriesHomePageComponent } from './components';
import { ActionRowStoryTableExampleComponent } from './action-row/action-row.component';
import { TableActionRowComponent } from './action-row/table-action-row/table-action-row.component';

const MATERIAL = [
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
];

const DECLARATION = [
  StoriesHomePageComponent,
  ActionRowStoryTableExampleComponent,
  TableActionRowComponent,
];

const ROUTES = [
  { path: 'action-row', component: ActionRowStoryTableExampleComponent, data: { title: 'Action Row' } },
];

@NgModule({
  declarations: DECLARATION,
  imports: [
    RouterModule.forChild([
      { path: '', component: StoriesHomePageComponent, children: [ ...ROUTES ] },
    ]),
    SharedModule,
    MATERIAL, MatRippleModule,
    PblNgridModule,
    PblNgridDragModule,
    PblNgridTargetEventsModule,
    PblNgridBlockUiModule,
    PblNgridTransposeModule,
    PblNgridDetailRowModule,
    PblNgridStickyModule,
    PblNgridMaterialModule,
  ],
  exports: [ MatRippleModule ], // we need this for detail-row
  providers: [ PblNgridRegistryService, ExampleGroupRegistryService ],
})
export class StoriesModule {
  constructor(registry: ExampleGroupRegistryService) {
    registry.registerGroup({ id: 'stories' });
    registry.registerSubGroupRoutes('stories', ROUTES);
  }
}

declare module '@pebula/apps/table/shared/src/lib/example-group/example-group-registry.service' {
  interface ExampleGroupMap {
    stories: ExampleGroupMetadata;
  }
}