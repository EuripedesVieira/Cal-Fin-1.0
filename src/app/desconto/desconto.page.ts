import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../services/generic-component';
import { ToastController } from '@ionic/angular';
import { DescontoFuncoes } from '../services/porcentagem/desconto';

@Component({
  selector: 'app-desconto',
  templateUrl: './desconto.page.html',
  styleUrls: ['./desconto.page.scss'],
})
export class DescontoPage extends GenericComponent implements OnInit {

  descontoFunces = new DescontoFuncoes(this.toast);
  constructor(public toast: ToastController) {
    super(toast);
  };

  ngOnInit() {};

  calcular(){
    if(this.valor==null && this.resultado!=null && this.taxa!=null){
        if(this.descontoFunces.validadorValor(this.resultado,this.taxa)){
          this.valor=this.descontoFunces.calcularValor(this.resultado,this.taxa);
          this.valor=Math.round(this.valor);  
        }
    }
  
    if(this.resultado==null && this.valor!=null && this.taxa!=null){
        if(this.descontoFunces.validadorResultado(this.valor, this.taxa))
          this.resultado=this.descontoFunces.calcularResltado(this.valor,this.taxa);
    }
  
    if(this.taxa==null && this.resultado!=null && this.valor!=null){
        if(this.descontoFunces.validadorTaxaPercentual(this.valor,this.resultado))
           this.taxa=this.descontoFunces.calcularTaxaPercentual(this.valor,this.resultado);
    }
  
    
    if((this.valor==null && this.resultado==null) ||
      (this.valor==null && this.taxa==null) || 
      (this.resultado==null && this.taxa==null) ||
      (this.valor==null && this.resultado==null && this.taxa==null)){
        super.abrirToast(this.mensagem2);
      }
    };
  
  cancelar(){
    this.valor=null;
    this.taxa=null;
    this.resultado=null;
  }; 
}
