import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiciopedidoService } from '../serviciopedido.service';
import { ActivatedRoute } from '@angular/router';
import { listapedido } from '../modulos/listapedido';

@Component({
  selector: 'app-componente1-pedido',
  templateUrl: './componente1-pedido.component.html',
  styleUrls: ['./componente1-pedido.component.css']
})
export class Componente1PedidoComponent {
 auxpedido:listapedido=new listapedido (0,"","")

  pedidoFormulario:FormGroup = new FormGroup ({
    idpedido : new FormControl({value: this.auxpedido.idpedido, disabled : true}),
    idcliente : new FormControl(0),
    formadepago : new FormControl (''),
    direccion : new FormControl('')
   })

   constructor(private serviciopedido: ServiciopedidoService, private activateroute: ActivatedRoute){
    
   }
   ngOnInit(): void {
  
}
  alta(){

      this.auxpedido.idcliente=this.pedidoFormulario.value.idcliente,
      this.auxpedido.formadepago=this.pedidoFormulario.value.formadepago,
      this.auxpedido.direccion=this.pedidoFormulario.value.direccion,

    this.serviciopedido.anadirpedido(this.auxpedido)
    this.auxpedido = new listapedido (0,"","")
    this.pedidoFormulario.reset()
  }
}


