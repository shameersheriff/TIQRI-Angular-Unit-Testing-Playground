import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { HightlightDirective } from "./hightlight.directive";

@Component({
  template: `<div appHightlight>Hover over me to highlight my text</div>`
})
class TestComponent { }

describe('HightlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let div: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HightlightDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    div = fixture.debugElement.query(By.css('div'));
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should highlight the element when the mouse enters', () => {
    div.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('should un-highlight the element when the mouse leaves', () => {
    div.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div.nativeElement.style.backgroundColor).toBe('white');
  });
});
