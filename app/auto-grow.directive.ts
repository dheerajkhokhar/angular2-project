import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector:'[autoGrow]',
    host:{
        '(focus)': 'onFocus()',
        '(blur)':'onBlur()'
    }
})

export class AutoGrowDirective{    
    constructor(private el:ElementRef, private randerer: Renderer){

    }
    onFocus(){
        this.randerer.setElementStyle(this.el.nativeElement,'width','200');
    }

    onBlur(){
        this.randerer.setElementStyle(this.el.nativeElement,'width','120');    
    }

}

// ElementRef give access to the host element.
// Renderer modify the element.