import { Component } from '@angular/core';
import { Navbar } from "../sheard/navbar/navbar";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../sheard/footer/footer";

@Component({
  selector: 'app-main-app',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './main-app.html',
  styleUrl: './main-app.scss'
})
export class MainApp {

}
