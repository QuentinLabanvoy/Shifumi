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
  versShifumi(pseudo : any){
    this.sendRequestofather.emit(pseudo);
    this.router.navigate(['shifumi']);
   console.log(pseudo);

  }
  versBot(){
    this.router.navigate(['bot']);
  }

}
