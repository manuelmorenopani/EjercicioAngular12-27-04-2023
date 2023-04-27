export class listadetalle{
    public idpedido : number = 0
    public idproducto : number= 0
    public cantidad : number = 0

    
    constructor(idpedido: number, idproducto : number, cantidad : number){
      this.idpedido=idpedido;
      this.idproducto=idproducto;
      this.cantidad=cantidad;
      
    }
    }