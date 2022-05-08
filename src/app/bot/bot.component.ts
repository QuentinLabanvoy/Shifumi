import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {
  Resultat = "";
  victoire = 0;
  Pierre = 0;
  PierreGagne = 0;
  Ciseaux = 1;
  CiseauxGagne = 0;
  Papier = 2;
  PapierGagne = 0;

  cheminImage: any = "../../assets/bot.png";
  constructor() { }

  ngOnInit(): void {
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  resultat(Resultat: string) {
    var dot = document.getElementById('dot');
    var bot = document.getElementById('bot');
    (async () => {
      this.Resultat = "";
      dot?.classList.remove('hidden');
      bot?.classList.add('hidden');
      await this.delay(2000);
      dot?.classList.add('hidden');
      bot?.classList.remove('hidden');
      this.Resultat = Resultat;

      if (Resultat == 'Égalité !') {
        this.victoire = 0
      }
      if (Resultat == 'Gagné !') {
        this.victoire = this.victoire + 1;
      }
      if (Resultat == 'Perdue !') {
        this.victoire = 0;
      }
    
    })();



  }
  Check(shifumi: string) {
    var valeur = this.Bot();
    if (valeur == 0) {
      this.cheminImage = "../../assets/pierre.png";
    }
    else if (valeur == 1) {
      this.cheminImage = "../../assets/ciseaux.png";
    }
    else {
      this.cheminImage = "../../assets/feuille.png";
    }


    if (shifumi == 'Pierre') {
      var Pierre = document.getElementById('Pierre');
      var Papier = document.getElementById('Papier');
      var Ciseaux = document.getElementById('Ciseaux');


      Pierre?.classList.add('choix');
      Papier?.classList.remove('choix');
      Ciseaux?.classList.remove('choix');
      if (this.Pierre == valeur) {
        this.resultat("Égalité !");

      }
      else if (valeur == 2) {
        this.resultat("Perdue !");


      }
      else {
        this.resultat("Gagné !");


      }
    }
    if (shifumi == 'Papier') {
      var Pierre = document.getElementById('Pierre');
      var Papier = document.getElementById('Papier');
      var Ciseaux = document.getElementById('Ciseaux');


      Pierre?.classList.remove('choix');
      Papier?.classList.add('choix');
      Ciseaux?.classList.remove('choix');

      if (this.Papier == valeur) {
        this.resultat("Égalité !");

      }
      else if (valeur == 1) {
        this.resultat("Perdue !");

      }
      else {
        this.resultat("Gagné !");
        this.victoire = this.victoire + 1;

      }
    }
    if (shifumi == 'Ciseaux') {
      var Pierre = document.getElementById('Pierre');
      var Papier = document.getElementById('Papier');
      var Ciseaux = document.getElementById('Ciseaux');


      Pierre?.classList.remove('choix');
      Papier?.classList.remove('choix');
      Ciseaux?.classList.add('choix');

     
      if (this.Ciseaux == valeur) {
        this.resultat("Égalité !");

      }
      else if (valeur == 0) {
        this.resultat("Perdue !");

      }
      else {
        this.resultat("Gagné !");
      }
    }
  }

  Bot() {
    return Math.floor(Math.random() * 3);
  }
}
