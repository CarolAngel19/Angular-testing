import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreetingsComponent } from './greetings.component';
import { By } from '@angular/platform-browser';

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let fixture: ComponentFixture<GreetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingsComponent ]
    });

    fixture = TestBed.createComponent(GreetingsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default message', () => {
    fixture.detectChanges(); // Trigger change detection
    const mensajeElement = fixture.debugElement.query(By.css('.mensaje'));
    const mensajeText = mensajeElement.nativeElement.textContent;
    expect(mensajeText).toContain('Valor por defecto');
  });
});
