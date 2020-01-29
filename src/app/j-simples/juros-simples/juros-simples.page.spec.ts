import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JurosSimplesPage } from './juros-simples.page';

describe('JurosSimplesPage', () => {
  let component: JurosSimplesPage;
  let fixture: ComponentFixture<JurosSimplesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurosSimplesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JurosSimplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
