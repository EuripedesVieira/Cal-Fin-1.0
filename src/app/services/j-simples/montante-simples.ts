import { GenericComponent } from '../generic-component';

export class Montante extends GenericComponent {

   calcularMontante(capital:number, taxa:number, periodo:number){
       taxa=taxa/100;
       let montante = capital*((taxa*periodo)+1);
       return montante;
   }

   calcularCapital(montante:number, taxa:number, periodo:number){
       taxa=taxa/100;
       let capital = montante/((taxa*periodo)+1);
       return capital;}

   calcularTaxa(montante:number, capital:number, periodo:number){
       let taxa = 100*((montante-capital)/(capital*periodo));
       return taxa;
   }

   calcularPeriodo(montante:number, capital:number, taxa:number){
       taxa=taxa/100;
       let periodo = (montante-capital)/(capital*taxa);
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