import { Component, OnInit } from '@angular/core';
import { GenericComponent } from 'src/app/services/generic-component';
import { JurosSimples } from 'src/app/services/j-simples/juros-simples';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.page.html',
  styleUrls: ['./juros-simples.page.scss'],
})
export class JurosSimplesPage extends GenericComponent implements OnInit {

  jurosSimples = new JurosSimples(this.toast);
  
  constructor(public toast: ToastController) { 
    super(toast);
  }

  ngOnInit() {
    this.tipoTaxa=1;
    this.tipoPeriodo=1;
  }

  calcular(){
    if(this.capital!=null && this.taxa!=null && this.periodo!=null && this.juro==null){
      if(this.jurosSimples.validadorJuros(this.capital,this.taxa, this.periodo)){
        let periodoConvertido: number=this.jurosSimples.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.juro=this.jurosSimples.CalcularJuros(this.capital,this.taxa,periodoConvertido);
      }
    }

    if(this.juro!=null && this.taxa!=null && this.periodo!=null && this.capital==null){
      if(this.jurosSimples.validadorCapital(this.juro,this.taxa,this.periodo)){
        let periodoConvertido:number=this.jurosSimples.converterPeriodo(this.tipoTaxa,this.tipoPeriodo,this.periodo);
        this.capital=this.jurosSimples.CalcularCapital(this.juro,this.taxa,periodoConvertido);
      }
    }
    if(this.juro!=null && this.capital!=null && this.periodo!=null && this.taxa==null){
      if(this.jurosSimples.validadorTaxa(this.juro,this.capital,this.periodo)){
        this.taxa=this.jurosSimples.CalcularTaxa(this.juro,this.capital,this.periodo);
        this.tipoTaxa=this.tipoPeriodo;
      }
    }
    
    if(this.juro!=null && this.capital!=null && this.taxa!=null && this.periodo==null){
      if(this.jurosSimples.validadorPeriodo(this.juro,this.capital,this.taxa)){
        this.periodo=this.jurosSimples.CalcularPeriodo(this.juro,this.capital,this.taxa);
        this.tipoPeriodo=this.tipoTaxa;
      }
    }

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
  };

  cancelar(){
    this.juro=null;
    this.capital=null;
    this.periodo=null;
    this.taxa=null;
    this.tipoTaxa=1;
    this.tipoPeriodo=1;
  };
}
