import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcripcion: Subscription;
  constructor() {


   this.subcripcion = this.retornarObervable()
    // .pipe(retry(2))
    .subscribe(value => {
      console.log('sub', value);
    }, error => console.error('error en el observable', error),
    () => console.log('el observador termino!!!')
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subcripcion.unsubscribe();
  }

  retornarObervable(): Observable<any> {
    const obs = new Observable<any>(observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        const salida = {
          valor: contador
        }
        observer.next(salida);
        if (contador === 5) {
           clearInterval(intervalo);
           observer.complete();
        }
        // if ( contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('error en el observer');
        // }
      }, 1000);
    }).pipe(
      map(resp => {
          return resp.valor;
      })
      , filter((valor, index) => {
        // console.log('filter', valor, index);
        return (valor % 2) === 1;
      })
      );
    return obs;
  }

}
