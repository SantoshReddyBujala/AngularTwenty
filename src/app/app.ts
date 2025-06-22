import { Component } from '@angular/core';
import { Header } from '../components/header/header';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'AngularTwenty';
}
