import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciopedidoService } from '../serviciopedido.service';
import { ActivatedRoute } from '@angular/router';
import { listapedido } from '../modulos/listapedido';
import { listadetalle } from '../modulos/listadetalle';

@Component({
  selector: 'app-componente2-detalle',
  templateUrl: './componente2-detalle.component.html',
  styleUrls: ['./componente2-detalle.component.css']
})
export class Componente2DetalleComponent {
  detalleFormulario:FormGroup = new FormGroup ({
    idproducto : new FormControl(0),
    cantidad : new FormControl (0),
   })
   ids :number=0
   constructor(private serviciopedido: ServiciopedidoService, private activateroute: ActivatedRoute){
    
   }
   ngOnInit(): void {
    this.activateroute.params.subscribe(data => {
      this.ids = data['id']})
  
}
  alta(){
    let detalle : listadetalle= new listadetalle(
      this.ids,
      this.detalleFormulario.value.idproducto,
      this.detalleFormulario.value.cantidad,
    );
    this.serviciopedido.anadirdetalle(detalle)
    this.detalleFormulario.reset()
  }
}

