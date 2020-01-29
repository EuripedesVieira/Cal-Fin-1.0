import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { DescontoComposto } from 'src/app/services/descontos/desconto-composto';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-desconto-composto',
  templateUrl: './desconto-composto.page.html',
  styleUrls: ['./desconto-composto.page.scss'],
})
export class DescontoCompostoPage extends GenericComponent implements OnInit {

  descontoComposto = new DescontoComposto(this.toast); 
  constructor(public toast: ToastController) {
    super(toast);
   };

   ngOnInit() {
    this.tipoPeriodo=1;
    this.tipoTaxa=1;    
  }

  calcular(){
    if(this.valorTitulo!=null && this.taxa!=null && this.periodo!=null && this.desconto==null){
      if(this.descontoComposto.validadorDesconto(this.valorTitulo,this.taxa, this.periodo)){
        let periodoConvertido: number=this.descontoComposto.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.desconto=this.descontoComposto.calcularDesconto(this.valorTitulo,this.taxa,periodoConvertido);
      }
    }

    if(this.desconto!=null && this.taxa!=null && this.periodo!=null && this.valorTitulo==null){
      if(this.descontoComposto.validadorValorTitulo(this.desconto,this.taxa,this.periodo)){
        let periodoConvertido:number=this.descontoComposto.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.valorTitulo=this.descontoComposto.calcularValorTitulo(this.desconto,this.taxa,periodoConvertido);
      }
    }

    if(this.desconto!=null && this.valorTitulo!=null && this.periodo!=null && this.taxa==null){
      if(this.descontoComposto.validadorTaxa(this.desconto,this.valorTitulo,this.periodo)){
        this.taxa=this.descontoComposto.calcularTaxa(this.desconto,this.valorTitulo,this.periodo);
        this.tipoTaxa=this.tipoPeriodo;
      }
    }
    
    if(this.desconto!=null && this.valorTitulo!=null && this.taxa!=null && this.periodo==null){
      if(this.descontoComposto.validadorPeriodo(this.desconto,this.valorTitulo,this.taxa)){
        this.periodo=this.descontoComposto.calcularPeriodo(this.desconto,this.valorTitulo,this.taxa);
        this.tipoPeriodo=this.tipoTaxa;
      }
    }

    if((this.valorTitulo==null && this.taxa==null && this.periodo==null && this.desconto==null) || 
       
       (this.valorTitulo!=null && this.taxa==null && this.periodo==null && this.desconto==null) ||
       (this.valorTitulo!=null && this.taxa!=null && this.periodo==null && this.desconto==null) ||
       (this.valorTitulo!=null && this.taxa==null && this.periodo!=null && this.desconto==null) ||
       (this.valorTitulo!=null && this.taxa==null && this.periodo==null && this.desconto!=null) ||
       
       (this.valorTitulo==null && this.taxa!=null && this.periodo==null && this.desconto==null) ||
       (this.valorTitulo==null && this.taxa!=null && this.periodo!=null && this.desconto==null) ||
       (this.valorTitulo==null && this.taxa!=null && this.periodo==null && this.desconto!=null) ||

       (this.valorTitulo==null && this.taxa==null && this.periodo!=null && this.desconto==null) ||
       (this.valorTitulo==null && this.taxa==null && this.periodo!=null && this.desconto!=null) ||

       (this.valorTitulo==null && this.taxa==null && this.periodo==null && this.desconto!=null))
        super.abrirToast(this.mensagem2);
  };

  cancelar(){
    this.desconto=null;
    this.valorTitulo=null;
    this.periodo=null;
    this.taxa=null;
    this.tipoPeriodo=1;
    this.tipoTaxa=1; 
  };

}