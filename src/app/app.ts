import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./sheard/navbar/navbar";
import { Loader } from "./sheard/loader/loader";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'scheduler-system';
}
