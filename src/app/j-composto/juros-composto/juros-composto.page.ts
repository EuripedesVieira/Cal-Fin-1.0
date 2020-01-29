import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { ToastController } from '@ionic/angular';
import { JurosCompostos } from 'src/app/services/j-composto/juros-composto';

@Component({
  selector: 'app-juros-composto',
  templateUrl: './juros-composto.page.html',
  styleUrls: ['./juros-composto.page.scss'],
})
export class JurosCompostoPage extends GenericComponent implements OnInit {

  jurosComposto = new JurosCompostos(this.toast);

  constructor(public toast: ToastController) {
    super(toast);
   }

  ngOnInit() {
    this.tipoTaxa=1;
    this.tipoPeriodo=1;
  };

  calcular(){

    if(this.capital!=null && this.taxa!=null && this.periodo!=null && this.juro==null){
      if(this.jurosComposto.validadorCapital(this.capital,this.taxa,this.periodo)){
        let periodoCovertido: number;
        periodoCovertido=this.jurosComposto.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.juro=this.jurosComposto.calcularJuros(this.capital,this.taxa,periodoCovertido);
      };
    };
    if(this.juro!=null && this.taxa!=null && this.periodo!=null && this.capital==null){
      if(this.jurosComposto.validadorCapital(this.juro,this.taxa,this.periodo)){
        let periodoCovertido: number;
        periodoCovertido=this.jurosComposto.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.capital = this.jurosComposto.calcularCapital(this.juro,this.taxa,periodoCovertido);
      };
    };
    if(this.juro!=null && this.capital!=null && this.periodo!=null && this.taxa==null){
      if(this.jurosComposto.validadorTaxa(this.juro,this.capital,this.periodo)){
        this.taxa=this.jurosComposto.calcularTaxa(this.juro,this.capital,this.periodo);
        this.tipoTaxa=this.tipoPeriodo;
      };
    };
    if(this.juro!=null && this.capital!=null && this.taxa!=null && this.periodo==null){
      if(this.jurosComposto.validadorPeriodo(this.juro,this.capital,this.taxa)){
        this.periodo=this.jurosComposto.calcularPeriodo(this.juro,this.capital,this.taxa);
        this.tipoPeriodo=this.tipoTaxa;
      };
    };

    if((this.capital==null && this.taxa==null && this.periodo==null && this.juro==null) || 
       
       (this.capital!=null && this.taxa==null && this.periodo==null && this.juro==null) ||
       (this.capital!=null && this.taxa!=null && this.periodo==null && this.juro==null) ||
       (this.capital!=null && this.taxa==null && this.periodo!=null && this.juro==null) ||
       (this.capital!=null && this.taxa==null && this.periodo==null && this.juro!=null) ||
       
       (this.capital==null && this.taxa!=null && this.periodo==null && this.juro==null) ||
       (this.capital==null && this.taxa!=null && this.periodo!=null && this.juro==null) ||
       (this.capital==null && this.taxa!=null && this.periodo==null && this.juro!=null) ||

       (this.capital==null && this.taxa==null && this.periodo!=null && this.juro==null) ||
       (this.capital==null && this.taxa==null && this.periodo!=null && this.juro!=null) ||

       (this.capital==null && this.taxa==null && this.periodo==null && this.juro!=null))
        super.abrirToast(this.mensagem2);
  }

    cancelar(){
      this.juro=null;
      this.capital=null;
      this.periodo=null;
      this.taxa=null;
      this.tipoPeriodo=1;
      this.tipoTaxa=1;
    };
} 