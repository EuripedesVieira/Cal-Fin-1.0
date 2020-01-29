import { GenericComponent } from '../generic-component';

export class JurosSimples extends GenericComponent {

   CalcularJuros(capital: number, taxa: number, periodo:number){
       let juros = capital*(taxa/100)*periodo;
       return juros;
   }

   CalcularCapital(juros:number,taxa:number,periodo:number){
       taxa=taxa/100;
       let capital = juros/(taxa*periodo);
       return capital;
   }

   CalcularTaxa(juros: number, capital:number, periodo:number){
       let taxa=100*(juros/(capital*periodo));
       return taxa;
   }

   CalcularPeriodo(juros:number, capital:number, taxa:number){
       taxa=taxa/100;
       let periodo = juros/(capital*taxa);
       return periodo;  
   }

   validadorJuros(capital: number, taxa: number, periodo:number){
       if(capital>0 && taxa>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
   }
   
   validadorCapital(juros:number,taxa:number,periodo:number){
       if(juros>0 && taxa>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
       
   }
   validadorTaxa(juros:number,capital:number, periodo:number){
       if(juros>0 && capital>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6); 
   }
   validadorPeriodo(juros:number,capital:number,taxa:number){
       if(juros>0 && capital>0 && taxa>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
   }

   converterTaxaAnualParaMensal(taxaAnual:number){
       let taxaMensal = taxaAnual/12;
       return taxaMensal;
   }
   ConverterTaxaMensalParaAnual(taxaMensal:number){
       let taxaAnual = taxaMensal*12;
       return taxaAnual;
   }

   converterPeriodo(tipoTaxa:number,tipoPeriodo:number, periodo:number){
       if(tipoPeriodo==tipoTaxa)
           return periodo;
       if(tipoPeriodo==1 && tipoTaxa==2)
           return periodo/12;
       if(tipoPeriodo==2 && tipoTaxa==1)
           return  periodo*12;
   }
}