import { GenericComponent } from '../generic-component';

export class MontanteComposto extends GenericComponent {

   calcularMontante(capital:number, taxa:number, periodo:number){
       taxa=taxa/100;
       let montante: number = capital*(Math.pow((taxa+1),periodo));
       return montante;
   }
   calcularCapital(montante:number, taxa:number, periodo:number){
       taxa=taxa/100;
       let capital: number = montante/(Math.pow((taxa+1),periodo));
       return capital;
   }
   calcularTaxa(montante:number, capital:number, periodo:number){
       let taxa: number = 100*((Math.pow((montante/capital),(1/periodo)))-1);
       return taxa;
   }
   calcularPeriodo(montante:number, capital:number, taxa:number){
       taxa=taxa/100+1;
       let periodo:number = Math.log10(montante/capital)/Math.log10(taxa);
       return periodo; 
   }
   validadorCapital(montante:number, taxa:number, periodo:number){
       if(montante>0 && taxa>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
   }
   validadorMontante(capital:number, taxa:number, periodo:number){
       if(capital>0 && taxa>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
   }
   validadorTaxa(montante:number, capital:number, periodo:number){
       if(montante>0 && capital>0 && periodo>0)
           if(montante>capital)
               return 1;
           else
               super.abrirToast(this.mensagem7);
       else
           super.abrirToast(this.mensagem6);
   }
   validadorPeiodo(montante:number, capital:number, taxa:number){
       if(montante>0 && capital>0 && taxa>0)
           if(montante>capital)
               return 1;
           else
               super.abrirToast(this.mensagem7);
       else
           super.abrirToast(this.mensagem6);
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