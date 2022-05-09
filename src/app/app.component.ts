import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pseudo: any;
  send(pseudo: any){
    this.pseudo = pseudo;
    console.log(this.pseudo);
    console.log("toto");
  }
}

