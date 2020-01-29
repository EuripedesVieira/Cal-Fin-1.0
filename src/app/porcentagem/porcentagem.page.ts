import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../services/generic-component';
import { ToastController } from '@ionic/angular';
import { Porcentagem } from '../services/porcentagem/porcentagem';

@Component({
  selector: 'app-porcentagem',
  templateUrl: './porcentagem.page.html',
  styleUrls: ['./porcentagem.page.scss'],
})
export class PorcentagemPage extends GenericComponent{

  porcentagem = new Porcentagem(this.toast);

  constructor(public toast: ToastController) {
    super(toast);
  };

  calcular(){
    
    if(this.valor==null && this.resultado!=null && this.taxa!=null){
      if(this.porcentagem.validadorValor(this.resultado,this.taxa))
        this.valor=this.porcentagem.calcularValor(this.resultado,this.taxa);
      else
        super.abrirToast(this.mensagem1);
      
  }

  if(this.resultado==null && this.valor!=null && this.taxa!=null){
      if(this.porcentagem.validadorPorcentagem(this.valor, this.taxa)){
        this.resultado=this.porcentagem.calcularPorcentagem(this.valor,this.taxa);
        console.log(this.resultado)
      }
      else
        super.abrirToast(this.mensagem1);
  }

  if(this.taxa==null && this.resultado!=null && this.valor!=null){
      if(this.porcentagem.validadorTaxaPercentual(this.valor,this.resultado))
         this.taxa=this.porcentagem.calcularTaxaPercentual(this.valor,this.resultado);
      else
        super.abrirToast(this.mensagem1);     
  }

  
  if((this.valor==null && this.resultado==null) ||
    (this.valor==null && this.taxa==null) || 
    (this.resultado==null && this.taxa==null) ||
    (this.valor==null && this.resultado==null && this.taxa==null)){
      super.abrirToast(this.mensagem2);
    }
  }
  cancelar(){
    this.valor=null;
    this.taxa=null;
    this.resultado=null;
  }
}
