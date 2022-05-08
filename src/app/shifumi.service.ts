import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class shifumiService {

  constructor() { }

  NbAlea(){

    return Math.floor(Math.random() * 3);
  }
  Joueur1Filtre(){

    var joueur1 = document.getElementById('joueur1');
    joueur1?.classList.add('flitre');
  }
  Joueur2Filtre(){

    var joueur2 = document.getElementById('joueur2');
    joueur2?.classList.add('flitre');
  }
  JoueurChoix(choix : string){

   var ChoixDuJoueur = document.getElementById(choix);
   ChoixDuJoueur?.classList.add('choix');
  }

  
}
