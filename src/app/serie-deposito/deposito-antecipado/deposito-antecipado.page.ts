import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { ToastController } from '@ionic/angular';
import { DepositoAntecipado } from 'src/app/services/serie-depositos/deposito-antecipado';

@Component({
  selector: 'app-deposito-antecipado',
  templateUrl: './deposito-antecipado.page.html',
  styleUrls: ['./deposito-antecipado.page.scss'],
})
export class DepositoAntecipadoPage extends GenericComponent implements OnInit {

  depositoAntecipado = new DepositoAntecipado(this.toast);
  constructor(public toast: ToastController) {
    super(toast);
   };

  ngOnInit() {
    this.tipoPeriodo=1;
    this.tipoTaxa=1;
  };
  calcular(){
    if(this.valorDeposito!=null && this.taxa!=null && this.periodo!=null && this.valorFuturo==null){
      if(this.depositoAntecipado.validadorValorFuturo(this.valorDeposito,this.taxa, this.periodo)){
        let taxaConvertido: number=this.depositoAntecipado.converterTaxa(this.tipoTaxa,this.tipoPeriodo,this.taxa);
        this.valorFuturo=this.depositoAntecipado.calcularValorFuturo(this.valorDeposito,taxaConvertido,this.periodo);
      }
    }

    if(this.valorFuturo!=null && this.taxa!=null && this.periodo!=null && this.valorDeposito==null){
      if(this.depositoAntecipado.validadorDeposito(this.valorFuturo,this.taxa,this.periodo)){
        let taxaConvertido:number=this.depositoAntecipado.converterTaxa(this.tipoTaxa,this.tipoPeriodo,this.taxa);
        this.valorDeposito=this.depositoAntecipado.calcularDeposito(this.valorFuturo,taxaConvertido,this.periodo);
      }
    }

    if(this.valorFuturo!=null && this.valorDeposito!=null && this.periodo!=null && this.taxa==null){
      if(this.depositoAntecipado.validadorTaxa(this.valorFuturo,this.valorDeposito,this.periodo)){
        this.taxa=this.depositoAntecipado.calcularTaxa(this.valorFuturo,this.valorDeposito,this.periodo);
        this.tipoTaxa=this.tipoPeriodo;
      }
    }
    
    if(this.valorFuturo!=null && this.valorDeposito!=null && this.taxa!=null && this.periodo==null){
      if(this.depositoAntecipado.validadorPeriodo(this.valorFuturo,this.valorDeposito,this.taxa)){
        this.periodo=this.depositoAntecipado.calcularPeriodo(this.valorFuturo,this.valorDeposito,this.taxa);
        this.tipoPeriodo=this.tipoTaxa;
      }
    }

    if((this.valorDeposito==null && this.taxa==null && this.periodo==null && this.valorFuturo==null) || 
       
       (this.valorDeposito!=null && this.taxa==null && this.periodo==null && this.valorFuturo==null) ||
       (this.valorDeposito!=null && this.taxa!=null && this.periodo==null && this.valorFuturo==null) ||
       (this.valorDeposito!=null && this.taxa==null && this.periodo!=null && this.valorFuturo==null) ||
       (this.valorDeposito!=null && this.taxa==null && this.periodo==null && this.valorFuturo!=null) ||
       
       (this.valorDeposito==null && this.taxa!=null && this.periodo==null && this.valorFuturo==null) ||
       (this.valorDeposito==null && this.taxa!=null && this.periodo!=null && this.valorFuturo==null) ||
       (this.valorDeposito==null && this.taxa!=null && this.periodo==null && this.valorFuturo!=null) ||

       (this.valorDeposito==null && this.taxa==null && this.periodo!=null && this.valorFuturo==null) ||
       (this.valorDeposito==null && this.taxa==null && this.periodo!=null && this.valorFuturo!=null) ||

       (this.valorDeposito==null && this.taxa==null && this.periodo==null && this.valorFuturo!=null))
        super.abrirToast(this.mensagem2);
  };

  cancelar(){
    this.valorDeposito=null;
    this.taxa=null;
    this.periodo=null;
    this.valorFuturo=null;
    this.tipoPeriodo=1;
    this.tipoTaxa=1;
  }
}
