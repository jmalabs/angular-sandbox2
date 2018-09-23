import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appRedenderDirective]'
})
export class RendererDirective implements OnInit {

    @HostBinding('style.fontSize') fontSize:string = '12px';
    @HostBinding('style.color') fontColor:string = 'black';
    /**
     *
     */
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }

    ngOnInit(): void {
 
    }
    
    @HostListener('mouseenter') mouseEnter(eventData:Event){
        // this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '70px');
        this.fontSize = '120px';
        this.fontColor = 'red';
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave') mouseLeave(eventData:Event){
        this.fontSize = '12px';
        this.fontColor = 'black';
        // this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '12px');
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    }
}