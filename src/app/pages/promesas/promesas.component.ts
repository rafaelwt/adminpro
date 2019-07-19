import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    // promesa.then(
    //   () => console.log('termino'),
    //   () => console.log('Error'),
    // );
    this.contarTres().then(
      // () => console.log('termino')
      mensaje => console.log('termino', mensaje)
    ).catch( error => console.error('Error', error));

  }

  ngOnInit() {
  }
  contarTres(): Promise<boolean> {
     const promesa = new Promise<boolean>((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          // reject('simplemente un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });
     return promesa;
  }

}
