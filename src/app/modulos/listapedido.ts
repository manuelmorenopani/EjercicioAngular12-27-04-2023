export class listapedido{
    public idpedido : number = 0
    public idcliente : number= 0
    public formadepago : string = ""
    public direccion : string = ""
    static idp=0;
    
    constructor( idcliente : number, formadepago : string, direccion : string){
        listapedido.idp++;
      this.idpedido=listapedido.idp;
      this.idcliente=idcliente;
      this.formadepago=formadepago
      this.direccion=direccion
      
    }
    }