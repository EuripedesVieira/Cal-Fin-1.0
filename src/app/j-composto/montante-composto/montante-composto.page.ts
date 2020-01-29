import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { MontanteComposto } from 'src/app/services/j-composto/montante-composto';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-montante-composto',
  templateUrl: './montante-composto.page.html',
  styleUrls: ['./montante-composto.page.scss'],
})
export class MontanteCompostoPage extends GenericComponent implements OnInit {

  funcoesMontanteComposto = new MontanteComposto(this.toast);
  constructor(public toast:ToastController) {
    super(toast);
   }

   ngOnInit() {
    this.tipoTaxa=1;
    this.tipoPeriodo=1;
  }

  calcular(){
    if(this.capital!=null && this.taxa!=null && this.periodo!=null && this.montante==null){
      if(this.funcoesMontanteComposto.validadorMontante(this.capital,this.taxa,this.periodo)){
        let periodoCovertido: number;
        periodoCovertido=this.funcoesMontanteComposto.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.montante=this.funcoesMontanteComposto.calcularMontante(this.capital,this.taxa,periodoCovertido);
      };
    };
    if(this.montante!=null && this.taxa!=null && this.periodo!=null && this.capital==null){
      if(this.funcoesMontanteComposto.validadorCapital(this.montante,this.taxa,this.periodo)){
        let periodoCovertido: number;
        periodoCovertido=this.funcoesMontanteComposto.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.capital = this.funcoesMontanteComposto.calcularCapital(this.montante,this.taxa,periodoCovertido);
      };
    };
    if(this.montante!=null && this.capital!=null && this.periodo!=null && this.taxa==null){
      if(this.funcoesMontanteComposto.validadorTaxa(this.montante,this.capital,this.periodo)){
        this.taxa=this.funcoesMontanteComposto.calcularTaxa(this.montante,this.capital,this.periodo);
        this.tipoTaxa=this.tipoPeriodo;
      };
    };
    if(this.montante!=null && this.capital!=null && this.taxa!=null && this.periodo==null){
      if(this.funcoesMontanteComposto.validadorPeiodo(this.montante,this.capital,this.taxa)){
        this.periodo=this.funcoesMontanteComposto.calcularPeriodo(this.montante,this.capital,this.taxa);
        this.tipoPeriodo=this.tipoTaxa;
      };
    };

    if((this.capital==null && this.taxa==null && this.periodo==null && this.montante==null) || 
       
       (this.capital!=null && this.taxa==null && this.periodo==null && this.montante==null) ||
       (this.capital!=null && this.taxa!=null && this.periodo==null && this.montante==null) ||
       (this.capital!=null && this.taxa==null && this.periodo!=null && this.montante==null) ||
       (this.capital!=null && this.taxa==null && this.periodo==null && this.montante!=null) ||
       
       (this.capital==null && this.taxa!=null && this.periodo==null && this.montante==null) ||
       (this.capital==null && this.taxa!=null && this.periodo!=null && this.montante==null) ||
       (this.capital==null && this.taxa!=null && this.periodo==null && this.montante!=null) ||

       (this.capital==null && this.taxa==null && this.periodo!=null && this.montante==null) ||
       (this.capital==null && this.taxa==null && this.periodo!=null && this.montante!=null) ||

       (this.capital==null && this.taxa==null && this.periodo==null && this.montante!=null))
        super.abrirToast(this.mensagem2);
    
  }

    cancelar(){
      this.taxa=null;
      this.capital=null;
      this.periodo=null;
      this.montante=null;
      this.tipoTaxa=1;
      this.tipoPeriodo=1;
    };

};

