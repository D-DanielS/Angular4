import {Directive, HostListener, HostBinding} from '@angular/core'

@Directive({
  selector : "li[contar-clicks]"
})

export class ContarClicksDirective{
  clicksN = 0;
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click',['$event.target']) onclick(btn){
    console.log('a', btn,"Número de Cliks: ", this.clicksN++)
    this.opacity += .1;
  }
}