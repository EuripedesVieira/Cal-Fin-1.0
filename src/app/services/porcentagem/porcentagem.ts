import { GenericComponent } from '../generic-component';

export class Porcentagem extends GenericComponent{

    calcularPorcentagem(valor:number, taxa:number): number{
            let resultado = (taxa/100)*valor;
            return resultado;
    }
    
    calcularTaxaPercentual(valor:number, resultado: number): number{
        let taxa = (100*resultado)/valor;
        return taxa;           
    }

    calcularValor(resultado: number, taxa:number): number{
        let valor = (100*resultado)/taxa;
        return valor;
    }

    //Validador
    validadorPorcentagem(valor:number, taxa: number){
        if(valor>0 && taxa>0)
            return 1;
    }

    validadorTaxaPercentual(valor: number, resultado:number){
        if(valor>0 && resultado>0)
            return 1;
    }

    validadorValor(taxa:number, resultado:number){
        if(taxa>0 && resultado>0)
            return 1;
    }
}