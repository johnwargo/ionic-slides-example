import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Slides2Page } from './slides2.page';

describe('Slides2Page', () => {
  let component: Slides2Page;
  let fixture: ComponentFixture<Slides2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slides2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Slides2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
