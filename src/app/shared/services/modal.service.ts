import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  showModal(id){
    const modal = document.getElementById(id);
    if(modal){
      modal.style.display = 'block';
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }else{
      console.warn(`cant't find modal element by id`)
    }
  }

  hideModal(id){
    const modal = document.getElementById(id);
    if(modal){
      modal.style.display = 'none';
      document.getElementsByTagName('body')[0].style.overflow = "auto";
    }else{
      console.warn(`cant't find modal element by id`)
    }
  }
}
