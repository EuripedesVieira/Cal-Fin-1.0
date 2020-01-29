import { GenericComponent } from '../generic-component';

export class JurosCompostos extends GenericComponent{

   calcularJuros(capital: number, taxa: number, periodo:number){
       taxa=(taxa/100)+1;
       let juros: number = capital*(Math.pow(taxa,periodo)-1);
       return juros;
   };

   calcularCapital(juros:number,taxa:number,periodo:number){
       taxa=(taxa/100)+1;
       let capital:number = juros/((Math.pow(taxa,periodo))-1);
       return capital;
   };

   calcularTaxa(juros: number, capital:number, periodo:number){
       let taxa:number = (Math.pow(((juros/capital)+1),(1/periodo))-1)*100;
       return taxa;
   };

   calcularPeriodo(juros:number, capital:number, taxa:number){
       taxa=(taxa/100)+1;
       let periodo:number = Math.log10((juros/capital)+1)/Math.log10(taxa)
       return periodo;  
   };

   validadorJuros(capital: number, taxa: number, periodo:number){
       if(capital>0 && taxa>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
   };
   
   validadorCapital(juros:number,taxa:number,periodo:number){
       if(juros>0 && taxa>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
   };

   validadorTaxa(juros:number,capital:number, periodo:number){
       if(juros>0 && capital>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6); 
   };

   validadorPeriodo(juros:number,capital:number,taxa:number){
       if(juros>0 && capital>0 && taxa>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
   };

   converterPeriodo(tipoTaxa:number,tipoPeriodo:number, periodo:number){
       if(tipoPeriodo==tipoTaxa)
           return periodo;
       if(tipoPeriodo==1 && tipoTaxa==2)
           return periodo/12;
       if(tipoPeriodo==2 && tipoTaxa==1)
           return  periodo*12;
   };
}