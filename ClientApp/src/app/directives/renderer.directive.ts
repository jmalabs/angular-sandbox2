import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[appRedenderDirective]'
})
export class RendererDirective implements OnInit {

    /**
     *
     */
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '70px');
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
    
}