import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JurosCompostoPage } from './juros-composto.page';

describe('JurosCompostoPage', () => {
  let component: JurosCompostoPage;
  let fixture: ComponentFixture<JurosCompostoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurosCompostoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JurosCompostoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
