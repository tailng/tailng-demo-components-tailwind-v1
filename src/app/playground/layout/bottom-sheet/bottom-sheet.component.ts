import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bottom-sheet.component.html',
})
export class BottomSheetComponent {}
