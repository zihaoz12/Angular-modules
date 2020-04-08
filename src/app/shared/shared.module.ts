import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { ChangeColorIntervalDirective } from './directive/change-color-interval.directive';
import { LimieCharPipe } from './pipes/limie-char.pipe';



@NgModule({
  declarations: [ModalComponent, ChangeColorIntervalDirective, LimieCharPipe],
  imports: [
    CommonModule, 
  ],
  exports: [
    CommonModule,
    ChangeColorIntervalDirective,
    ModalComponent,
    LimieCharPipe
  ]
})
export class SharedModule { }
