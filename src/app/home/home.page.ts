import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { renderHiddenInput } from '@ionic/core/dist/types/utils/helpers';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public titulo = 'meu primeiro app';
  public imgRandom = 'https://source.unsplash.com/800x600';
  public valorDoCampo = '';
  public numero1: number;
  public numero2: number;
  // public result: number;
  public pesquisa: string;
  public resultado: string;

  constructor(private navegacao: NavController) {}

  public recuperar(): void {
    this.resultado = this.pesquisa;
  }

  public atualiza(): void {
    this.titulo = this.valorDoCampo;
  }

  // public matematica(): void {
  //   this.result = this.numero1 + this.numero2;
  // }

  public abrirBotoes(): void {
    this.navegacao.navigateForward('botoes');
  }
  public abrirLista(): void {
    this.navegacao.navigateForward('lista');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
