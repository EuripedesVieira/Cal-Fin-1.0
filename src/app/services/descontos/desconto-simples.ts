import { GenericComponent } from '../generic-component';


export class DescontoSimples extends GenericComponent{

   calcularDesconto(valorTitulo: number, taxa: number, periodo:number):number{
       let desconto:number = valorTitulo*(taxa/100)*periodo;
       return desconto;
   }

   calcularValorTitulo(desconto:number,taxa:number,periodo:number):number{
       taxa=taxa/100;
       let valorTitulo: number = desconto/(taxa*periodo);
       return valorTitulo;
   }

    calcularTaxa(desconto: number, valorTitulo:number, periodo:number):number{
        let taxa:number = 100*(desconto/(valorTitulo*periodo));
        if(taxa>100){
            super.abrirToast(this.mensagem15);
            return taxa= null;
        }
        else
            return taxa;
   }

   calcularPeriodo(desconto:number, valorTitulo:number, taxa:number):number{
       taxa=taxa/100;
       let periodo: number = desconto/(valorTitulo*taxa);
       return periodo;  
   }

   validadorDesconto(valorTitulo: number, taxa: number, periodo:number){
       if(valorTitulo>0 && taxa>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
   }
   
   validadorValorTitulo(desconto:number,taxa:number,periodo:number){
       if(desconto>0 && taxa>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6);
       
   }
   validadorTaxa(desconto:number,valorTitulo:number, periodo:number){
       if(desconto>0 && valorTitulo>0 && periodo>0)
           return 1;
       else
           super.abrirToast(this.mensagem6); 
   }
   validadorPeriodo(desconto:number,valorTitulo:number,taxa:number){
       if(desconto>0 && valorTitulo>0 && taxa>0)
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
};