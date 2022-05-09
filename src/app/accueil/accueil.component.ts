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
  versShifumi(){
    
    this.router.navigate(['shifumi']);

  }
  versBot(){
    this.router.navigate(['bot']);
  }

}
