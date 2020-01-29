import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AumentoPage } from './aumento.page';

describe('AumentoPage', () => {
  let component: AumentoPage;
  let fixture: ComponentFixture<AumentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AumentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AumentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
