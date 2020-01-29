import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { GenericComponent } from '../services/generic-component';
import { Aumento } from '../services/porcentagem/aumento';

@Component({
  selector: 'app-aumento',
  templateUrl: './aumento.page.html',
})
export class AumentoPage extends GenericComponent implements OnInit {

  aumento = new Aumento(this.toast);
  constructor(public toast: ToastController) {
    super(toast);
  };

  ngOnInit() {};

  calcular(){
    if(this.valor==null && this.resultado!=null && this.taxa!=null){
      if(this.aumento.validadorValor(this.resultado,this.taxa)){
        this.valor=this.aumento.calcularValor(this.resultado,this.taxa);
        this.valor=Math.round(this.valor);  
      }
      
  }

    if(this.resultado==null && this.valor!=null && this.taxa!=null){
      if(this.aumento.validadorResultado(this.valor, this.taxa)){
        this.resultado=this.aumento.calcularResultado(this.valor,this.taxa);
      }
    }
  //pronto
  if(this.taxa==null && this.resultado!=null && this.valor!=null){
    if(this.aumento.validadorTaxaPercentual(this.valor,this.resultado))
      this.taxa=this.aumento.calcularTaxaPercentual(this.valor,this.resultado)
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
  }

}
