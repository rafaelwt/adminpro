import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;
  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {
    console.log(this.leyenda , this.progreso);
   }

  ngOnInit() {
  }
  onChanges($event: number): void {
    // const elemHTML: any = document.getElementsByName('progreso')[0];
    if ( $event >= 100) {
      this.progreso = 100;
    } else if ($event <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = $event;
    }
    // elemHTML.value = Number(this.progreso);
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = Number(this.progreso) + Number(valor);
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }

}
