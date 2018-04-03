import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {
    
  }
  
  public arr_jogos: string[] = new Array();

  public removeItem(item){
 
    for(var i = 0; i < this.arr_jogos.length; i++) {
 
      if(this.arr_jogos[i] == item){
        this.arr_jogos.splice(i, 1);
      }
 
    }
 
  }
  jogo(jogo) {
    
    let flag: boolean = true;
    let numero_sorteado: number = 0;
    var teste = '';
    var result = 0;
    

    var num_marcacao = 0;
    var num_tamanho = 0;
    switch (jogo) {
      case "Mega":
        num_marcacao = 6;
        num_tamanho = 60;
        break;
      case "Quina":
        num_marcacao = 5;
        num_tamanho = 80;
        break;
      case "Facil":
        num_marcacao = 15;
        num_tamanho = 25;
        break;

      default:
        alert("Selecione o jogo !!");
        return;
    }

    var arr_mega: string[] = new Array(num_marcacao);
    for (var i = 0; i < num_marcacao; i++) {

      while (flag == true) {
        numero_sorteado = Math.floor(Math.random() * num_tamanho) + 1;
        flag = false;
        for (var m = 0; m < arr_mega.length; m++) {
          if (arr_mega[m] == numero_sorteado.toString() || arr_mega[m] == ("0" + numero_sorteado.toString())) {
            flag = true;
          }
        }
        arr_mega[i] = numero_sorteado.toString();
        if (numero_sorteado < 10) {
          arr_mega[i] = "0" + arr_mega[i];
        }
      }
      flag = true;

    }
    //ordenando 
    arr_mega.sort();

    //Teste
    for (result = 0; result < arr_mega.length; result++) {
      teste = teste + arr_mega[result] + "-";
    }
       
    this.arr_jogos.push(teste.replace(/.$/,""));
    
  }


  sortear(tipo_jogo) {
    //Quina 1 a 80 5
    //Mega 1 a 60 6
    //Facil 1 a 25 15
    var jogo = "Quina";
    let flag: boolean = true;
    let numero_sorteado: number = 0;
    var teste = '';
    var result = 0;
    switch (jogo) {
      //Mega Sena
      case "Mega":
        var arr_mega: string[] = new Array(6);

        for (var i = 0; i < 6; i++) {

          while (flag == true) {
            numero_sorteado = Math.floor(Math.random() * 60) + 1;
            flag = false;
            for (var m = 0; m < arr_mega.length; m++) {
              if (arr_mega[m] == numero_sorteado.toString() || arr_mega[m] == ("0" + numero_sorteado.toString())) {
                flag = true;
              }
            }
            arr_mega[i] = numero_sorteado.toString();
            if (numero_sorteado < 10) {
              arr_mega[i] = "0" + arr_mega[i];
            }
          }
          flag = true;

        }
        //ordenando 
        arr_mega.sort();
        for (result = 0; result < arr_mega.length; result++) {
          teste = teste + arr_mega[result] + "-";
        }
        alert(teste);

        break;
      //FACIL
      case "Facil":
        
        var arr_facil: string[] = new Array(15);

        for (var j = 0; j < 15; j++) {

          while (flag == true) {
            numero_sorteado = Math.floor(Math.random() * 25) + 1;
            flag = false;
            for (var n = 0; n < arr_facil.length; n++) {
              if (arr_facil[n] == numero_sorteado.toString() || arr_facil[n] == ("0" + numero_sorteado.toString())) {
                flag = true;
              }
            }
            arr_facil[j] = numero_sorteado.toString();
            if (numero_sorteado < 10) {
              arr_facil[j] = "0" + arr_facil[j];
            }
          }
          flag = true;

        }
        //ordenando 
        arr_facil.sort();
        for (result = 0; result < arr_facil.length; result++) {
          teste = teste + arr_facil[result] + "-";
        }
        alert(teste);

        break;
      case "Quina":
       
        var arr_quina: string[] = new Array(5);

        for (var k = 0; k < 5; k++) {

          while (flag == true) {
            numero_sorteado = Math.floor(Math.random() * 80) + 1;
            flag = false;
            for (var p = 0; p < arr_quina.length; p++) {
              if (arr_quina[p] == numero_sorteado.toString() || arr_quina[p] == ("0" + numero_sorteado.toString())) {
                flag = true;
              }
            }
            arr_quina[k] = numero_sorteado.toString();
            if (numero_sorteado < 10) {
              arr_quina[k] = "0" + arr_quina[k];
            }
          }
          flag = true;

        }
        //ordenando 
        arr_quina.sort();
        for (result = 0; result < arr_quina.length; result++) {
          teste = teste + arr_quina[result] + "-";
        }
        alert(teste);
        break;
      default:
        alert("Nenhum Jogo Selecionado !!");

    }

  }

}
