import { GenericComponent } from '../generic-component';

export class DescontoComposto extends GenericComponent{

   calcularDesconto(valorTitulo: number, taxa: number, periodo:number){
       taxa=1-(taxa/100);
       let desconto: number = valorTitulo*(1-Math.pow(taxa,periodo));
       return desconto;
   }

   calcularValorTitulo(desconto:number,taxa:number,periodo:number){
       taxa=1-(taxa/100);
       let valorTitulo:number = desconto/(1-(Math.pow(taxa,periodo)));
       return valorTitulo;
   }

   calcularTaxa(desconto: number, valorTitulo:number, periodo:number){
       let taxa:number = (1-Math.pow((1-(desconto/valorTitulo)),(1/periodo)))*100;
       return taxa;
   }

   calcularPeriodo(desconto:number, valorTitulo:number, taxa:number){
       taxa=1-(taxa/100);
       let periodo:number = Math.log10(1-(desconto/valorTitulo))/Math.log10(taxa)
       return periodo;  
   }

   validadorDesconto(valorTitulo: number, taxa: number, periodo:number){
       if(valorTitulo>0 && taxa>0 && periodo>0){
           if(taxa<=100)
               return 1;
           else
               super.abrirToast(this.mensagem4);
       }
       else
           super.abrirToast(this.mensagem6);
   }
   
   validadorValorTitulo(desconto:number,taxa:number,periodo:number){
       if(desconto>0 && taxa>0 && periodo>0){
           if(taxa<=100)
               return 1;
            else
           super.abrirToast(this.mensagem4);
       }
       else
           super.abrirToast(this.mensagem6);
   }

   validadorTaxa(desconto:number,valorTitulo:number, periodo:number){
       if(desconto>0 && valorTitulo>0 && periodo>0){
           if(desconto<=valorTitulo)
               return 1;
           else
               super.abrirToast(this.mensagem10);
       }        
       else
           super.abrirToast(this.mensagem6); 
   }
   validadorPeriodo(desconto:number,valorTitulo:number,taxa:number){
       if(desconto>0 && valorTitulo>0 && taxa>0){
           if(taxa<100)
               return 1;
           else
               super.abrirToast(this.mensagem4);
       }
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
};