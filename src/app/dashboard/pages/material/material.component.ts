import { Component, inject } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { OptionsBottomSheetComponent } from './ui/options-bottom-sheet/options-bottom-sheet.component';

import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-material',
  imports: [
    MatSlideToggleModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule
  ],
  templateUrl: './material.component.html',
  styles: ``
})
export default class MaterialComponent {
  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet(){
    this._bottomSheet.open(OptionsBottomSheetComponent);
  }
}
