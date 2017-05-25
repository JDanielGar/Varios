import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'segundo-evento',
    template: `
        <h2> El valor de tu variable es: {{variable}} </h2>
        <button (click)="Contador()">Comenzar Conteo</button>
        <button (click)="enviarInformacion()">Enviar</button>
    `
})

export class segundoEvento{
    @Output() clickBoton = new EventEmitter()

    variable = 0

    Contador() {
        setInterval(() => {this.variable++}, 1000)
    }

    enviarInformacion(entrada){
        this.clickBoton.emit(this.variable)
    }


}