import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Slides1Page } from './slides1.page';

describe('Slides1Page', () => {
  let component: Slides1Page;
  let fixture: ComponentFixture<Slides1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slides1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Slides1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
