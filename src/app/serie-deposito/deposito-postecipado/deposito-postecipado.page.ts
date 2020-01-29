import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { ToastController } from '@ionic/angular';
import { DepositoPostecipado } from 'src/app/services/serie-depositos/deposito-postecipado';

@Component({
  selector: 'app-deposito-postecipado',
  templateUrl: './deposito-postecipado.page.html',
  styleUrls: ['./deposito-postecipado.page.scss'],
})
export class DepositoPostecipadoPage extends GenericComponent implements OnInit {

  depositoPostecipado = new DepositoPostecipado(this.toast);
  constructor(public toast: ToastController){
    super(toast);
   }

  ngOnInit() {
    this.tipoPeriodo=1;
    this.tipoTaxa=1;
  }

  calcular(){
    if(this.valorDeposito!=null && this.taxa!=null && this.periodo!=null && this.valorFuturo==null){
      if(this.depositoPostecipado.validadorValorFuturo(this.valorDeposito,this.taxa, this.periodo)){
        let taxaConvertido: number=this.depositoPostecipado.converterTaxa(this.tipoTaxa,this.tipoPeriodo,this.taxa);
        this.valorFuturo=this.depositoPostecipado.calcularValorFuturo(this.valorDeposito,taxaConvertido,this.periodo);
      }
    }

    if(this.valorFuturo!=null && this.taxa!=null && this.periodo!=null && this.valorDeposito==null){
      if(this.depositoPostecipado.validadorDeposito(this.valorFuturo,this.taxa,this.periodo)){
        let taxaConvertido:number=this.depositoPostecipado.converterTaxa(this.tipoTaxa,this.tipoPeriodo,this.taxa);
        this.valorDeposito=this.depositoPostecipado.calcularDeposito(this.valorFuturo,taxaConvertido,this.periodo);
      }
    }

    if(this.valorFuturo!=null && this.valorDeposito!=null && this.periodo!=null && this.taxa==null){
      if(this.depositoPostecipado.validadorTaxa(this.valorFuturo,this.valorDeposito,this.periodo)){
        this.taxa=this.depositoPostecipado.calcularTaxa(this.valorFuturo,this.valorDeposito,this.periodo);
        this.tipoTaxa=this.tipoPeriodo;
      }
    }
    
    if(this.valorFuturo!=null && this.valorDeposito!=null && this.taxa!=null && this.periodo==null){
      if(this.depositoPostecipado.validadorPeriodo(this.valorFuturo,this.valorDeposito,this.taxa)){
        this.periodo=this.depositoPostecipado.calcularPeriodo(this.valorFuturo,this.valorDeposito,this.taxa);
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
