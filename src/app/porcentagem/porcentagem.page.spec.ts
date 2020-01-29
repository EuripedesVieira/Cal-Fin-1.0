import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PorcentagemPage } from './porcentagem.page';

describe('PorcentagemPage', () => {
  let component: PorcentagemPage;
  let fixture: ComponentFixture<PorcentagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorcentagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PorcentagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
