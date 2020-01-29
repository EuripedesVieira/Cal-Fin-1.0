import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
    },
    {
      title:'Descontos',
      button:false,
      subPages:[
        {
          title: 'Desconto simples',
          url: '/desconto-simples',
        },
        {
          title: 'Desconto composto',
          url: '/desconto-composto',
        }
      ]
    },
    {
      title:'Juros composto',
      button:false,
      subPages:[
        {
          title: 'Juros composto',
          url: '/juros-composto',
        },
        {
          title: 'Montante composto',
          url: '/montante-composto',
        }
      ]
    }
    ,
    {
      title:'Juros simples',
      button:false,
      subPages:[
        {
          title: 'Juros simples',
          url: '/juros-simples',
        },
        {
          title: 'Montante simples',
          url: '/montante-simples',
        }
      ]
    },
    {
      title:'Porcentagem',
      button:false,
      subPages:[
        {
          title: 'Aumento',
          url: '/aumento',
        },
        {
          title: 'Desconto',
          url: '/desconto',
        },
        {
          title: 'Porcentagem',
          url: '/porcentagem',
        },
      ]
    },
    {
      title:'Série de depósito',
      button:false,
      subPages:[
        {
          title: 'Depósito antecipado',
          url: '/deposito-antecipado',
        },
        {
          title: 'Depósito postecipado',
          url: '/deposito-postecipado',
        },
      ]
    },
    {
      title:'Série de pagamento',
      button:false,
      subPages:[
        {
          title: 'Pagamento antecipado',
          url: '/pagamento-antecipado',
        },
        {
          title: 'Pagamento postecipado',
          url: '/pagamento-postecipado',
        },
      ]
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
