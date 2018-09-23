import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

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
 
    }
    
    @HostListener('mouseenter') mouseEnter(eventData:Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '70px');
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseLeave(eventData:Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '12px');
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    }
}