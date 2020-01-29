import { GenericComponent } from '../generic-component';

export class DescontoFuncoes extends GenericComponent{
    
    calcularResltado(valor:number, taxa:number): number{
        let resultado = (1-(taxa/100))*valor;
        return resultado;
    }
    
    calcularTaxaPercentual(valor:number, resultado: number): number{
        let taxa = 100*(1-(resultado/valor));
        return taxa;           
    }

    calcularValor(resultado: number, taxa:number): number{
        let valor = resultado/(1-(taxa/100));
        return valor;
    }

    //Validador
    validadorResultado(valor:number, taxa: number){
        if(valor>=0 && taxa>=0){
            if(taxa<=100)
                return 1;
            else
                super.abrirToast(this.mensagem4);
        }
        else
            super.abrirToast(this.mensagem1);
    }
    

    validadorTaxaPercentual(valor: number, resultado:number){
        if(valor>=0 && resultado>=0){
            if(resultado<=valor)
                return 1;
            else
                super.abrirToast(this.mensagem5);
    
        }else
            super.abrirToast(this.mensagem1);

    }

    validadorValor(resultado:number,taxa:number){
        if(taxa>=0 && resultado>=0){
            if(taxa<100)
                return 1;
            else
                super.abrirToast(this.mensagem11);
        }
        else
            super.abrirToast(this.mensagem1);
    }

}