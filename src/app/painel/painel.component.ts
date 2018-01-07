import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();
  public frases: Array<Frase> = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // console.log('O componente painel foi destruído');
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    if (this.resposta === this.rodadaFrase.frasePtBr) {
      // Troca a rodada
      this.rodada++;

      // Progresso
      this.progresso += (100 / this.frases.length);

      // Verificar o sucesso
      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      // Atualiza a rodada
      this.atualizaRodada();
    } else {
      // Decrementa as tentativas
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  private atualizaRodada(): void {
    // Troca a frase da rodada
    this.rodadaFrase = this.frases[this.rodada];

    // Limpa a resposta
    this.resposta = '';
  }
}
