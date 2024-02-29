import { ElementRef, Renderer2 } from '@angular/core';
import { OutSideClickDirective } from './outside-click.directive';

describe('OutsideClickDirective', () => {
  it('should create an instance', () => {
    // en ref avec le header => constructor(private renderer: Renderer2, private el: ElementRef)
    const elementRefMock = {} as ElementRef; //  mock de ElementRef
    const rendererMock = {} as Renderer2; // mock de Renderer2
    const directive = new OutSideClickDirective(elementRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
