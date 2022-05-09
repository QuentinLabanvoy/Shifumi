import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  title = 'projet';
  constructor(private router:Router){}


@Output()  sendRequestofather = new EventEmitter(); 


  ngOnInit(): void {
   
  }
  versShifumi(Joueur1 : any,Joueur2 : any){
    this.sendRequestofather.emit(Joueur1);
    
    this.router.navigate(['shifumi']);
   console.log(Joueur1,Joueur2);

  }
  versBot(){
    this.router.navigate(['bot']);
  }

}
