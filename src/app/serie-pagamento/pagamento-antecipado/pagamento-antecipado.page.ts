import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { ToastController } from '@ionic/angular';
import { PagamentoAntecipado } from 'src/app/services/serie-pagamentos/pagamento-antecipado';

@Component({
  selector: 'app-pagamento-antecipado',
  templateUrl: './pagamento-antecipado.page.html',
  styleUrls: ['./pagamento-antecipado.page.scss'],
})
export class PagamentoAntecipadoPage extends GenericComponent implements OnInit {

  pagamentoAntecipado = new PagamentoAntecipado(this.toast);
  constructor(public toast: ToastController) {
    super(toast);
   }

  ngOnInit() {
    this.tipoPeriodo=1;
    this.tipoTaxa=1;
  }

  calcular(){
    if(this.valorParcela!=null && this.taxa!=null && this.periodo!=null && this.valorAtual==null){
      if(this.pagamentoAntecipado.validadorValorAtual(this.valorParcela,this.taxa, this.periodo)){
        let taxaConvertido: number=this.pagamentoAntecipado.converterTaxa(this.tipoTaxa,this.tipoPeriodo,this.taxa);
        this.valorAtual=this.pagamentoAntecipado.calcularValorAtual(this.valorParcela,taxaConvertido,this.periodo);
      }
    }

    if(this.valorAtual!=null && this.taxa!=null && this.periodo!=null && this.valorParcela==null){
      if(this.pagamentoAntecipado.validadorValorParcela(this.valorAtual,this.taxa,this.periodo)){
        let taxaConvertido:number=this.pagamentoAntecipado.converterTaxa(this.tipoTaxa,this.tipoPeriodo,this.taxa);
        this.valorParcela=this.pagamentoAntecipado.calcularValorParcela(this.valorAtual,taxaConvertido,this.periodo);
      }
    }

    if(this.valorAtual!=null && this.valorParcela!=null && this.periodo!=null && this.taxa==null){
      if(this.pagamentoAntecipado.validadorTaxa(this.valorAtual,this.valorParcela,this.periodo)){
        this.taxa=this.pagamentoAntecipado.calcularTaxa(this.valorAtual,this.valorParcela,this.periodo);
        this.tipoTaxa=this.tipoPeriodo;
      }
    }
    
    if(this.valorAtual!=null && this.valorParcela!=null && this.taxa!=null && this.periodo==null){
      if(this.pagamentoAntecipado.validadorPeriodo(this.valorAtual,this.valorParcela,this.taxa)){
        this.periodo=this.pagamentoAntecipado.calcularPeriodo(this.valorAtual,this.valorParcela,this.taxa);
        this.tipoPeriodo=this.tipoTaxa;
      }
    }

    if((this.valorParcela==null && this.taxa==null && this.periodo==null && this.valorAtual==null) || 
       
       (this.valorParcela!=null && this.taxa==null && this.periodo==null && this.valorAtual==null) ||
       (this.valorParcela!=null && this.taxa!=null && this.periodo==null && this.valorAtual==null) ||
       (this.valorParcela!=null && this.taxa==null && this.periodo!=null && this.valorAtual==null) ||
       (this.valorParcela!=null && this.taxa==null && this.periodo==null && this.valorAtual!=null) ||
       
       (this.valorParcela==null && this.taxa!=null && this.periodo==null && this.valorAtual==null) ||
       (this.valorParcela==null && this.taxa!=null && this.periodo!=null && this.valorAtual==null) ||
       (this.valorParcela==null && this.taxa!=null && this.periodo==null && this.valorAtual!=null) ||

       (this.valorParcela==null && this.taxa==null && this.periodo!=null && this.valorAtual==null) ||
       (this.valorParcela==null && this.taxa==null && this.periodo!=null && this.valorAtual!=null) ||

       (this.valorParcela==null && this.taxa==null && this.periodo==null && this.valorAtual!=null))
        super.abrirToast(this.mensagem2);
  };

  cancelar(){
    this.valorParcela=null;
    this.taxa=null;
    this.periodo=null;
    this.valorAtual=null;
    this.tipoPeriodo=1;
    this.tipoTaxa=1;
  }

}
