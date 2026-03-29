import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './shared/app-header/app-header.component';

@Component({
  selector: 'app-root',
  imports: [AppHeaderComponent, RouterOutlet],
  templateUrl: './app.html',
})
export class App {}
