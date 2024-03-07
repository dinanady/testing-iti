import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { ServicetestComponent } from './servicetest/servicetest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MyComponentComponent,ServicetestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
