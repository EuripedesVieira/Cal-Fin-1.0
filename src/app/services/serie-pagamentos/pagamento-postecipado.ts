import { TaxaPagamentoPostecipado } from './tx-p-p';
import { GenericComponent } from '../generic-component';

export class PagamentoPostecipado extends GenericComponent{

    taxaPP= new TaxaPagamentoPostecipado();

   calcularValorAtual(valorParcela: number, taxa: number, periodo:number){
       taxa=(taxa/100);
       let valorAtual: number = valorParcela*((Math.pow((taxa+1),periodo)-1)/(Math.pow((1+taxa),periodo)*taxa));
       return valorAtual;
   };

   calcularValorParcela(valorAtual:number,taxa:number,periodo:number){
       taxa=(taxa/100);
       let valorParcela:number = (valorAtual*(Math.pow((1+taxa),periodo))*taxa)/(Math.pow((taxa+1),periodo)-1);
       return valorParcela;
   };

   calcularTaxa(valorAtual: number, valorParcela:number, periodo:number){
       let taxa:number;
       taxa=this.taxaPP.taxa(valorAtual,valorParcela,periodo)
       return taxa;
   };

   calcularPeriodo(valorAtual:number, valorParcela:number, taxa:number){
       taxa=(taxa/100);
       let periodo:number = Math.log10(valorParcela/(valorParcela-(valorAtual*taxa)))/Math.log10(taxa+1);
       return periodo;  
   };

   validadorValorAtual(valorParcela: number, taxa: number, periodo:number){
       if(valorParcela>0 && taxa>0 && periodo>0){
           return 1;           
       }
       else
           super.abrirToast(this.mensagem6);
   };
   
   validadorValorParcela(valorAtual:number,taxa:number,periodo:number){
       if(valorAtual>0 && taxa>0 && periodo>0){
           return 1;         
       }
       else
           super.abrirToast(this.mensagem6);
   };

   validadorTaxa(valorCreditado:number,valorParcela:number, periodo:number){
       if(valorCreditado>0 && valorParcela>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6); 
   };

   validadorPeriodo(valorAtual:number,valorParcela:number,taxa:number){
       if(valorAtual>0 && valorParcela>0 && taxa>0){
           if(valorParcela>(valorAtual*(taxa/100)))
               return 1;
           else
               super.abrirToast(this.mensagem13);                       
       }
       else
           super.abrirToast(this.mensagem6);
   };

   converterTaxa(tipoTaxa:number,tipoPeriodo:number, taxa:number){
       if(tipoTaxa==tipoPeriodo)
           return taxa;
       if(tipoTaxa==2 && tipoPeriodo==1){
           taxa=(taxa/100)+1;
           let taxaMensal: number;
           taxaMensal=Math.pow(taxa,(1/12))-1;
           taxaMensal=taxaMensal*100;
           return taxaMensal;}
       if(tipoTaxa==1 && tipoPeriodo==2){
           taxa=(taxa/100)+1;
           let taxaAnual:number;
           taxaAnual=Math.pow(taxa,12)-1;
           return  taxaAnual;}
   };
}