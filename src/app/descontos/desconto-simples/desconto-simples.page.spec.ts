import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescontoSimplesPage } from './desconto-simples.page';

describe('DescontoSimplesPage', () => {
  let component: DescontoSimplesPage;
  let fixture: ComponentFixture<DescontoSimplesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescontoSimplesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescontoSimplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
