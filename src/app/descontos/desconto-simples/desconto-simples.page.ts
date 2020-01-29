import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { DescontoSimples } from 'src/app/services/descontos/desconto-simples';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-desconto-simples',
  templateUrl: './desconto-simples.page.html',
  styleUrls: ['./desconto-simples.page.scss'],
})
export class DescontoSimplesPage extends GenericComponent implements OnInit {

  descontoSimples = new DescontoSimples(this.toast);

  constructor(public toast: ToastController) {
    super(toast);
   }

   ngOnInit() {
    this.tipoPeriodo=1;
    this.tipoTaxa=1;    
  }

  calcular(){
    if(this.valorTitulo!=null && this.taxa!=null && this.periodo!=null && this.desconto==null){
      if(this.descontoSimples.validadorDesconto(this.valorTitulo,this.taxa, this.periodo)){
        let periodoConvertido: number=this.descontoSimples.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.desconto=this.descontoSimples.calcularDesconto(this.valorTitulo,this.taxa,periodoConvertido);
      }
    }

    if(this.desconto!=null && this.taxa!=null && this.periodo!=null && this.valorTitulo==null){
      if(this.descontoSimples.validadorValorTitulo(this.desconto,this.taxa,this.periodo)){
        let periodoConvertido:number=this.descontoSimples.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.valorTitulo=this.descontoSimples.calcularValorTitulo(this.desconto,this.taxa,periodoConvertido);
      }
    }

    if(this.desconto!=null && this.valorTitulo!=null && this.periodo!=null && this.taxa==null){
      if(this.descontoSimples.validadorTaxa(this.desconto,this.valorTitulo,this.periodo)){
        this.taxa=this.descontoSimples.calcularTaxa(this.desconto,this.valorTitulo,this.periodo);
        this.tipoTaxa=this.tipoPeriodo;
      }
    }
    
    if(this.desconto!=null && this.valorTitulo!=null && this.taxa!=null && this.periodo==null){
      if(this.descontoSimples.validadorPeriodo(this.desconto,this.valorTitulo,this.taxa)){
        this.periodo=this.descontoSimples.calcularPeriodo(this.desconto,this.valorTitulo,this.taxa);
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
