import { Component, OnInit, Input } from '@angular/core';
import { shifumiService } from '../shifumi.service';

@Component({
  selector: 'app-shifumi',
  templateUrl: './shifumi.component.html',
  styleUrls: ['./shifumi.component.css']
})
export class ShifumiComponent implements OnInit {

  ResultatJoueur1 = "";
  ResultatJoueur2 = "";

pseudo1!: string;
pseudo2!: string;
Joueur1! : string;
Joueur2! : string;
send(Joueur1: string,Joueur2: string){
  this.pseudo1 = Joueur1;
  this.pseudo2 = Joueur2;

}
  cheminImage: any = "../../assets/bot.png";
  constructor(private shifumiService: shifumiService) { }

  ngOnInit(): void {
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  resultat(Resultat: string) {
    var dot = document.getElementById('dot');

    (async () => {

      dot?.classList.remove('hidden');

      await this.delay(2000);
      dot?.classList.add('hidden');
      /* ------------------------------------*/
      if (Resultat == 'Egalite') {
        this.ResultatJoueur1 = "Égalité !";
        this.ResultatJoueur2 = "Égalité !";
      }
      /* ------------------------------------*/
      if (Resultat == 'Joueur1Win') {
        this.ResultatJoueur1 = "Gagné !";
        this.ResultatJoueur2 = "Perdue !";
      }
      /* ------------------------------------*/
      if (Resultat == 'Joueur2Win') {
        this.ResultatJoueur1 = "Perdue !";
        this.ResultatJoueur2 = "Gagné !";
      }
      var row = document.getElementById('row');
      row?.classList.add('div');
    })();
  }

  Check(shifumi: string) {

    if (shifumi == 'Pierre1') {
      this.shifumiService.Joueur1Filtre();
      this.shifumiService.JoueurChoix(shifumi);
    }
    if (shifumi == 'Papier1') {
      this.shifumiService.Joueur1Filtre();
      this.shifumiService.JoueurChoix(shifumi);
    }
    if (shifumi == 'Ciseaux1') {
      this.shifumiService.Joueur1Filtre();
      this.shifumiService.JoueurChoix(shifumi);
    }
    if (shifumi == 'Pierre2') {
      this.shifumiService.Joueur2Filtre();
      this.shifumiService.JoueurChoix(shifumi);
    }
    if (shifumi == 'Papier2') {
      this.shifumiService.Joueur2Filtre();
      this.shifumiService.JoueurChoix(shifumi);
    }
    if (shifumi == 'Ciseaux2') {
      this.shifumiService.Joueur2Filtre();
      this.shifumiService.JoueurChoix(shifumi);
    }
    this.checkWin();
  }
  checkWin() {

    var Pierre1 = document.getElementById('Pierre1');
    var Papier1 = document.getElementById('Papier1');
    var Ciseaux1 = document.getElementById('Ciseaux1');

    var Pierre2 = document.getElementById('Pierre2');
    var Papier2 = document.getElementById('Papier2');
    var Ciseaux2 = document.getElementById('Ciseaux2');
    /*----------------------------------------------------------------------------*/
    if (Ciseaux1?.className == 'choix' && Ciseaux2?.className == 'choix') {
      this.resultat("Egalite");
    }
    if (Papier1?.className == 'choix' && Papier2?.className == 'choix') {
      this.resultat("Egalite");
    }
    if (Pierre1?.className == 'choix' && Pierre2?.className == 'choix') {
      this.resultat("Egalite");
    }
    /*----------------------------------------------------------------------------*/
    if (Ciseaux1?.className == 'choix' && Papier2?.className == 'choix') {
      this.resultat("Joueur1Win");
    }
    if (Ciseaux1?.className == 'choix' && Pierre2?.className == 'choix') {
      this.resultat("Joueur1Loose");
    }

    if (Ciseaux2?.className == 'choix' && Papier1?.className == 'choix') {
      this.resultat("Joueur2Win");
    }
    if (Ciseaux2?.className == 'choix' && Pierre1?.className == 'choix') {
      this.resultat("Joueur2Loose");
    }
    /*----------------------------------------------------------------------------*/
    if (Pierre1?.className == 'choix' && Ciseaux2?.className == 'choix') {
      this.resultat("Joueur1Win");
    }
    if (Pierre1?.className == 'choix' && Papier2?.className == 'choix') {
      this.resultat("Joueur1Loose");
    }

    if (Pierre2?.className == 'choix' && Ciseaux1?.className == 'choix') {
      this.resultat("Joueur2Win");
    }
    if (Pierre2?.className == 'choix' && Papier1?.className == 'choix') {
      this.resultat("Joueur2Loose");
    }
    /*----------------------------------------------------------------------------*/
    if (Papier1?.className == 'choix' && Pierre2?.className == 'choix') {
      this.resultat("Joueur1Win");
    }
    if (Papier1?.className == 'choix' && Ciseaux2?.className == 'choix') {
      this.resultat("Joueur1Loose");
    }

    if (Papier2?.className == 'choix' && Pierre1?.className == 'choix') {
      this.resultat("Joueur2Win");
    }
    if (Papier2?.className == 'choix' && Ciseaux1?.className == 'choix') {
      this.resultat("Joueur2Loose");
    }
  }
}
