import { TaxaDespositoAntecipado } from './tx-d-a';
import { GenericComponent } from '../generic-component';

export class DepositoAntecipado extends GenericComponent{

    taxaDA= new TaxaDespositoAntecipado();

    calcularValorFuturo(valorDeposito: number, taxa: number, periodo:number){
        taxa=(taxa/100);
        let valorFuturo: number = ((valorDeposito*(taxa+1))*(Math.pow((taxa+1),periodo)-1))/taxa;
        return valorFuturo;
    };
 
    calcularDeposito(valorFuturo:number,taxa:number,periodo:number){
        taxa=(taxa/100);
        let valorDeposito:number = (valorFuturo*taxa)/((Math.pow((taxa+1),periodo)-1)*(taxa+1));
        return valorDeposito;
    };
 
    calcularTaxa(valorCreditado: number, valorDeposito:number, periodo:number){
        let taxa:number = this.taxaDA.taxa(valorCreditado,valorDeposito,periodo);
        return taxa;
    };
 
    calcularPeriodo(valorFuturo:number, valorDeposito:number, taxa:number){
        taxa=(taxa/100);
        let periodo:number = Math.log10(((valorFuturo*taxa)/(valorDeposito*(taxa+1)))+1)/Math.log10(taxa+1);
        return periodo;  
    };
 
    validadorValorFuturo(valorDeposito: number, taxa: number, periodo:number){
        if(valorDeposito>0 && taxa>0 && periodo>0){
            return 1;           
        }
        else
            super.abrirToast(this.mensagem6);
    };
    
    validadorDeposito(valorFuturo:number,taxa:number,periodo:number){
        if(valorFuturo>0 && taxa>0 && periodo>0){
            return 1;         
        }
        else
            super.abrirToast(this.mensagem6);
    };
 
    validadorTaxa(valorCreditado:number,valorDeposito:number, periodo:number){
        if(valorCreditado>0 && valorDeposito>0 && periodo>0)
            return 1;
        else
            super.abrirToast(this.mensagem6); 
    };
 
    validadorPeriodo(valorFuturo:number,valorDeposito:number,taxa:number){
        if(valorFuturo>0 && valorDeposito>0 && taxa>0){
            if(valorFuturo>valorDeposito)
                return 1;
            else
                super.abrirToast(this.mensagem9);                       
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
            taxaAnual=taxaAnual*100;
            return  taxaAnual;}
    };
}