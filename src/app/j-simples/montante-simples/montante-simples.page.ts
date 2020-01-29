import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { Montante } from 'src/app/services/j-simples/montante-simples';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-montante-simples',
  templateUrl: './montante-simples.page.html',
  styleUrls: ['./montante-simples.page.scss'],
})
export class MontanteSimplesPage extends GenericComponent implements OnInit {

  funcoesMontante = new Montante(this.toast);

  constructor(public toast: ToastController) {
    super(toast);

   }

  ngOnInit() {
    this.tipoTaxa=1;
    this.tipoPeriodo=1;
  }

  calcular(){
    if(this.capital!=null && this.taxa!=null && this.periodo!=null && this.montante==null){
      if(this.funcoesMontante.validadorMontante(this.capital,this.taxa,this.periodo)){
        let periodoCovertido: number;
        periodoCovertido=this.funcoesMontante.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.montante=this.funcoesMontante.calcularMontante(this.capital,this.taxa,periodoCovertido);
      };
    };
    if(this.montante!=null && this.taxa!=null && this.periodo!=null && this.capital==null){
      if(this.funcoesMontante.validadorCapital(this.montante,this.taxa,this.periodo)){
        let periodoCovertido: number;
        periodoCovertido=this.funcoesMontante.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.capital = this.funcoesMontante.calcularCapital(this.montante,this.taxa,periodoCovertido);
      };
    };
    if(this.montante!=null && this.capital!=null && this.periodo!=null && this.taxa==null){
      if(this.funcoesMontante.validadorTaxa(this.montante,this.capital,this.periodo)){
        this.taxa=this.funcoesMontante.calcularTaxa(this.montante,this.capital,this.periodo);
        this.tipoTaxa=this.tipoPeriodo;
      };
    };
    if(this.montante!=null && this.capital!=null && this.taxa!=null && this.periodo==null){
      if(this.funcoesMontante.validadorPeiodo(this.montante,this.capital,this.taxa)){
        this.periodo=this.funcoesMontante.calcularPeriodo(this.montante,this.capital,this.taxa);
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

}
