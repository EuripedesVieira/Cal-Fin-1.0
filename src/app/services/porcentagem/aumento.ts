import { GenericComponent } from '../generic-component';

export class Aumento extends GenericComponent{    

    calcularResultado(valor:number, taxa:number): number{
        let resultado = ((taxa/100)+1)*valor;
        return resultado;
    }
    
    calcularTaxaPercentual(valor:number, resultado: number): number{
        let taxa = 100*((resultado/valor)-1);
        return taxa;           
    }

    calcularValor(resultado: number, taxa:number): number{
        let valor = resultado/(1+(taxa/100));
        return valor;
    }

    //Validador
    validadorResultado(valor:number, taxa: number){
        if(valor>=0 && taxa>=0)
            return 1;
        else
            super.abrirToast(this.mensagem1);
    }

    validadorTaxaPercentual(valor: number, resultado:number){
        if(valor>=0 && resultado>=0){
            if(resultado>=valor)
                return 1;
            else{
                super.abrirToast(this.mensagem3);
            }
        }
        else{
            super.abrirToast(this.mensagem1);
        }
    }

    validadorValor(taxa:number, resultado:number){
        if(taxa>=0 && resultado>=0)
            return 1;
        else
            super.abrirToast(this.mensagem1);
    }

}