import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescontoCompostoPage } from './desconto-composto.page';

describe('DescontoCompostoPage', () => {
  let component: DescontoCompostoPage;
  let fixture: ComponentFixture<DescontoCompostoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescontoCompostoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescontoCompostoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
