import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescontoPage } from './desconto.page';

describe('DescontoPage', () => {
  let component: DescontoPage;
  let fixture: ComponentFixture<DescontoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescontoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescontoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
