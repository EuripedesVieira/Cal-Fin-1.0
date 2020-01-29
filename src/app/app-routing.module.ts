import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'aumento',
    loadChildren: () => import('./aumento/aumento.module').then( m => m.AumentoPageModule)
  },
  {
    path: 'desconto',
    loadChildren: () => import('./desconto/desconto.module').then( m => m.DescontoPageModule)
  },
  {
    path: 'porcentagem',
    loadChildren: () => import('./porcentagem/porcentagem.module').then( m => m.PorcentagemPageModule)
  },
  {
    path: 'deposito-antecipado',
    loadChildren: () => import('./serie-deposito/deposito-antecipado/deposito-antecipado.module').then( m => m.DepositoAntecipadoPageModule)
  },
  {
    path: 'deposito-postecipado',
    loadChildren: () => import('./serie-deposito/deposito-postecipado/deposito-postecipado.module').then( m => m.DepositoPostecipadoPageModule)
  },
  {
    path: 'pagamento-postecipado',
    loadChildren: () => import('./serie-pagamento/pagamento-postecipado/pagamento-postecipado.module').then( m => m.PagamentoPostecipadoPageModule)
  },
  {
    path: 'pagamento-antecipado',
    loadChildren: () => import('./serie-pagamento/pagamento-antecipado/pagamento-antecipado.module').then( m => m.PagamentoAntecipadoPageModule)
  },
  {
    path: 'desconto-simples',
    loadChildren: () => import('./descontos/desconto-simples/desconto-simples.module').then( m => m.DescontoSimplesPageModule)
  },
  {
    path: 'desconto-composto',
    loadChildren: () => import('./descontos/desconto-composto/desconto-composto.module').then( m => m.DescontoCompostoPageModule)
  },
  {
    path: 'juros-composto',
    loadChildren: () => import('./j-composto/juros-composto/juros-composto.module').then( m => m.JurosCompostoPageModule)
  },
  {
    path: 'montante-composto',
    loadChildren: () => import('./j-composto/montante-composto/montante-composto.module').then( m => m.MontanteCompostoPageModule)
  },
  {
    path: 'montante-simples',
    loadChildren: () => import('./j-simples/montante-simples/montante-simples.module').then( m => m.MontanteSimplesPageModule)
  },
  {
    path: 'juros-simples',
    loadChildren: () => import('./j-simples/juros-simples/juros-simples.module').then( m => m.JurosSimplesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
