import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  teste() {
    alert(Math.floor(Math.random() * 9) + 1);
  }

  sortear(tipo_jogo) {
    //Quina 1 a 80 5
    //Mega 1 a 60 6
    //Facil 1 a 25 15
    var jogo = "Mega";
    let flag: boolean = true;
    let numero_sorteado: number = 0;
    var teste = '';
    var result = 0;
    switch (jogo) {
      case "Mega":
        var arr_mega: number[] = new Array(6);

        for (var i = 0; i < 6; i++) {

          while (flag == true) {
            numero_sorteado = Math.floor(Math.random() * 60) + 1;
            flag = false;
            for (var m = 0; m < arr_mega.length; m++) {
              if (arr_mega[m] == numero_sorteado) {
                flag = true;
              }
            }
            arr_mega[i] = numero_sorteado;

          }


          flag = true;
        }
        // arr_mega.sort();
        // for (result = 0; result < arr_mega.length; result++) {

        //   if (arr_mega[result] < 10) {
        //     teste = teste + '0' + arr_mega[result] + " - ";
        //   } else {
        //     teste = teste + arr_mega[result] + " - ";
        //   }

        // }
        // alert(teste);

        break;
      case "Facil":
        var arr_facil: number[] = new Array(15);
        for (var j = 0; j < 15; j++) {
          while (flag == true) {
            numero_sorteado = Math.floor(Math.random() * 25) + 1;
            flag = false;
            for (var m = 0; m < arr_facil.length; m++) {
              if (arr_facil[m] == numero_sorteado) {
                flag = true;
              }
            }
            arr_facil[j] = numero_sorteado;

          }


          flag = true;
        }

        break;
      case "Quina":
      alert("aeeeeee");
        var arr_quina: number[] = new Array(5);
        for (var l = 0; l < 5; l++) {
          while (flag == true) {
            numero_sorteado = Math.floor(Math.random() * 80) + 1;
            flag = false;
            for (var m = 0; m < arr_quina.length; m++) {
              if (arr_quina[m] == numero_sorteado) {
                flag = true;
              }
            }
            arr_quina[l] = numero_sorteado;

          }


          flag = true;
        }

        break;
      default:
        alert("Nenhum Jogo Selecionado !!");

    }

  }

}
