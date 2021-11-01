import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  // CONTROLE ESTADO DA PROPOSTA
  codigoEstadoPropostaNovo: number = 0;

  // CONTROLE DOS BOTOES
  habilitarCancelar: boolean = false;
  habilitarDEOC: boolean = false;
  habilitarDevolver: boolean = false;
  habilitarInstCredito: boolean = false;
  habilitarFormalizar: boolean = false;
  habilitarLiberar: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.codigoEstadoPropostaNovo = 7;
    this.verificarEstadoProposta(this.codigoEstadoPropostaNovo);
  }

  verificarEstadoProposta(numeroProposta: number): void {
    const estado = {
      7: () => {
        this.habilitarCancelar = this.codigoEstadoPropostaNovo === 7 ? true : false;
        this.habilitarDEOC = this.codigoEstadoPropostaNovo === 7 ? true : false;
        this.habilitarInstCredito = this.codigoEstadoPropostaNovo === 7 ? true : false;
        this.habilitarFormalizar = this.codigoEstadoPropostaNovo === 7 ? true : false;
      },
      8: () => {
        this.habilitarCancelar = this.codigoEstadoPropostaNovo === 8 ? true : false;
        this.habilitarDevolver = this.codigoEstadoPropostaNovo === 8 ? true : false;
        this.habilitarInstCredito = this.codigoEstadoPropostaNovo === 8 ? true : false;
        this.habilitarLiberar = this.codigoEstadoPropostaNovo === 8 ? true : false;
      },
      0: () => {
        return "Estado de Proposta Inválido.";
      }
    };
    return (estado[numeroProposta] || estado[0])();
  }
  
  cancelarProposta() {
    alert("Proposta Cancelada");
  }

  irParaDEOC() {
    alert("Ir para o DEOC");
  }

  devolverProposta() {
    alert("Proposta Devolvida");
  }

  imprimirInstCredito() {
    alert("Imprimir Instrumento de Crédito");
  }

  formalizarProposta() {
    alert("Proposta Formalizada");
  }

  liberarProposta() {
    alert("Proposta Liberada");
  }

}
