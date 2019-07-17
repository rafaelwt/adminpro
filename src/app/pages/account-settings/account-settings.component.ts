import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // constructor(@Inject(DOCUMENT) private _document, public settingsService: SettingsService) { }
  constructor(public settingsService: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }
  cambiarColor(tema: string, link: any): void {
    this.aplicarCheck(link);
    console.log(tema, link);
    this.settingsService.aplicarTema(tema);

  }
  aplicarCheck(link: any): void {
    const selectores: any = document.getElementsByClassName('selector');
    for ( const ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(): void {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this.settingsService.ajustes.tema;
    for ( const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
