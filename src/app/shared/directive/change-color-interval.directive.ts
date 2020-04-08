import { Directive, OnInit,OnDestroy,Input, ElementRef } from '@angular/core';


@Directive({
  selector: '[appChangeColorInterval]'
})
export class ChangeColorIntervalDirective implements OnInit, OnDestroy {

  @Input() intervalTime = 1;
  timeAction

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(){
    console.log("change-color onInit");
    this.timeAction = setInterval(() => {
      this.elementRef.nativeElement.style.color = this.getRandomColor();
    }, this.intervalTime * 1000);
  }

  getRandomColor(){
    return(
      '#' + Math.random().toString(16).substr(-6)
    )
  };

  ngOnDestroy(){
    clearInterval(this.timeAction)
  }

}
