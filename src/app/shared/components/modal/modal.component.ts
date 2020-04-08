import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    console.log("Modal Component")
  }

  hideModal(e){
    if(e.target.className === 'backdrop'){
      this.elementRef.nativeElement.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  }

}
