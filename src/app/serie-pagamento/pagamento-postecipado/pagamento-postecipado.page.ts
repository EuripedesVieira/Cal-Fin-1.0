import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { PagamentoPostecipado } from 'src/app/services/serie-pagamentos/pagamento-postecipado';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pagamento-postecipado',
  templateUrl: './pagamento-postecipado.page.html',
  styleUrls: ['./pagamento-postecipado.page.scss'],
})
export class PagamentoPostecipadoPage extends GenericComponent implements OnInit {

  pagamentoPostecipado= new PagamentoPostecipado(this.toast)
  constructor(public toast: ToastController) {
    super(toast);
   }

  ngOnInit() {
    this.tipoPeriodo=1;
    this.tipoTaxa=1;
  };

  calcular(){
    if(this.valorParcela!=null && this.taxa!=null && this.periodo!=null && this.valorAtual==null){
      if(this.pagamentoPostecipado.validadorValorAtual(this.valorParcela,this.taxa, this.periodo)){
        let taxaConvertido: number=this.pagamentoPostecipado.converterTaxa(this.tipoTaxa,this.tipoPeriodo,this.taxa);
        this.valorAtual=this.pagamentoPostecipado.calcularValorAtual(this.valorParcela,taxaConvertido,this.periodo);
      }
  }

  if(this.valorAtual!=null && this.taxa!=null && this.periodo!=null && this.valorParcela==null){
    if(this.pagamentoPostecipado.validadorValorParcela(this.valorAtual,this.taxa,this.periodo)){
      let taxaConvertido:number=this.pagamentoPostecipado.converterTaxa(this.tipoTaxa,this.tipoPeriodo,this.taxa);
      this.valorParcela=this.pagamentoPostecipado.calcularValorParcela(this.valorAtual,taxaConvertido,this.periodo);
    }
  }

  if(this.valorAtual!=null && this.valorParcela!=null && this.periodo!=null && this.taxa==null){
    if(this.pagamentoPostecipado.validadorTaxa(this.valorAtual,this.valorParcela,this.periodo)){
      this.taxa=this.pagamentoPostecipado.calcularTaxa(this.valorAtual,this.valorParcela,this.periodo);
      this.tipoTaxa=this.tipoPeriodo;
    }
  }
  
  if(this.valorAtual!=null && this.valorParcela!=null && this.taxa!=null && this.periodo==null){
    if(this.pagamentoPostecipado.validadorPeriodo(this.valorAtual,this.valorParcela,this.taxa)){
      this.periodo=this.pagamentoPostecipado.calcularPeriodo(this.valorAtual,this.valorParcela,this.taxa);
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
