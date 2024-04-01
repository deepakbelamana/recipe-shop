import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {


   @HostBinding('class.open') isOpen = false;

  constructor(private elementRef : ElementRef) { }

  @HostListener('click') manageRecipeClick(event : MouseEvent) {
      this.isOpen=!this.isOpen;
  }

}
