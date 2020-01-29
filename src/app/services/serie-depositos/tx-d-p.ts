export class TaxaDespositoPostecipado{
   
   ERRO: number;
   a: number;
   b: number;
   n:number;
   i: number;
   
   Xi: number;
   Fa: number;
   Fb: number;
   Fx: number;
   
   constructor(){
      this.ERRO=Math.pow(10,-10);
      this.a=this.ERRO;
      this.b=1;
   }

   inter():number{
      let n:number;
      n=(Math.log10(this.b-this.a)-Math.log10(this.ERRO))/Math.log10(2);
      n = Math.round(n)+1;
      return n;
   };
   
   xi(a:number, b:number):number{
      return (a+b)/2;
   }
   
   formula(x:number,valorCreditado: number, valorDeposito:number, periodo:number):number{
      return Math.pow((1+x),periodo)-((valorCreditado/valorDeposito)*x)-1;
   };
   
   taxa(valorCreditado: number, valorDeposito:number, periodo:number): number{
      this.n=this.inter();
      this.i=1;      
      while(this.i<=this.n){
         this.Xi=this.xi(this.a,this.b);
         this.Fa=this.formula(this.a,valorCreditado,valorDeposito,periodo);
         this.Fb=this.formula(this.b,valorCreditado,valorDeposito,periodo);
         this.Fx=this.formula(this.Xi,valorCreditado,valorDeposito,periodo);

         if(this.Fa*this.Fx<0)
            this.b=this.Xi;
      
         if(this.Fa*this.Fx>0)
            this.a=this.Xi;

         if(this.Fa==0 || this.Fb==0 || this.Fx==0){
            return 0;
         };

         this.i=this.i+1;
      };
      this.a=this.ERRO;
      this.b=1;
      return this.Xi*100;
   };
};