import { ToastController } from '@ionic/angular';

export class GenericComponent{
    
    mensagem1: string;
    mensagem2: string;
    mensagem3: string;
    mensagem4: string;
    mensagem5: string;
    mensagem6: string;
    mensagem7: string;
    mensagem8: string;
    mensagem9: string;
    mensagem10: string;
    mensagem11: string;
    mensagem12: string;
    mensagem13: string;
    mensagem14: string;

    valor: number;
    taxa: number;
    resultado: number;
    periodo: number;
    juro:number;
    capital:number;
    montante:number;
    valorTitulo:number;
    desconto:number;
    valorCreditado:number;
    valorFuturo:number;
    valorDeposito:number;
    valorParcela:number;
    valorAtual:number;

    tipoPeriodo:number;
    tipoTaxa:number;

    constructor(public toastController: ToastController){
        this.mensagem1 = "Digte apenas números possitivos";
        this.mensagem2 = "Deixe apanas o campo que deseja calcular em branco";
        this.mensagem3 = "O resultado deve ser maior que o valor";

        this.mensagem4 = "A taxa não deve ultrapassar 100%";
        this.mensagem5 = "O resultado deve ser menor que o valor";
        this.mensagem6 = "Digite somente valores maiores que 0";
        this.mensagem7 = "O montante deve ser maior que o capital";
        this.mensagem8 = "Deixe o campo que deseja calcular em branco";
        this.mensagem9 = "O valor do título deve ser maior que o valor creditado";
        this.mensagem10 = "O desconto deve ser menor ou igual ao valor do título";
        this.mensagem11 = "A taxa deve ser menor que 100%";
        this.mensagem12 = "O valor futuro deve ser maior que o deposito";
        this.mensagem13 = "O valor da parcela deve ser maior do que [Valor atual x taxa]";
        this.mensagem14 = "O valor da parcela deve ser maior do que [(Valor atual x taxa)/(1 + taxa/100)]";
    };
    
    async abrirToast(mensagem: string ){
        let toast = await this.toastController.create({
            message: mensagem,
            duration: 3000
          });
          toast.present();
        };
}