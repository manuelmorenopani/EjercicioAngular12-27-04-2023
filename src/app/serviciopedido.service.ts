import { Injectable } from '@angular/core';
import { listapedido} from './modulos/listapedido';
import { listadetalle } from './modulos/listadetalle';
@Injectable({
  providedIn: 'root'
})
export class ServiciopedidoService {
  mipedido:listapedido[]=[]
  midetalle:listadetalle[]=[]
  auxdetalle:listadetalle[]=[]
  

  constructor() { }
  getpedido():listapedido[]{
    return this.mipedido
  }
  anadirpedido(pedido:listapedido){
    this.mipedido.push(pedido)
    for(let i =0 ;i<=this.auxdetalle.length-1; i++){
      this.midetalle.push(this.auxdetalle[i])
}
this.auxdetalle.splice(0, this.auxdetalle.length)
console.log(this.midetalle)
console.log(this.mipedido)

  }
  anadirdetalle(detalle:listadetalle){
    this.auxdetalle.push(detalle)
  }
}
