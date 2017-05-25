import { Component } from '@angular/core'

@Component({
    selector: 'app-evento',
    template: `
        <div *ngIf="contadorPrincipal">
            <h1>Felicidades!</h1>
            <h2>Ahora tu componente contiene un valor de: {{contadorPrincipal}}</h2>
        </div>
        <segundo-evento (clickBoton)="CambiarValor($event)"></segundo-evento>
    `
})


export class componenteEvento{
    contadorPrincipal

    CambiarValor(valor){
        this.contadorPrincipal = valor
    }


}