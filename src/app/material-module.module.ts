import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatMenuModule,
  MatGridListModule,
  MatBadgeModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
} from '@angular/material';

import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,MatListModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    MatBadgeModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,MatRadioModule
  ],
  exports : [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule,
    MatBadgeModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
