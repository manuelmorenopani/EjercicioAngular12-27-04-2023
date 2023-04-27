import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1PedidoComponent } from './componente1-pedido/componente1-pedido.component';
import { Componente2DetalleComponent } from './componente2-detalle/componente2-detalle.component';

const routes: Routes = [
  {path: '',component:Componente1PedidoComponent,children: [

    {path:'detalle/:id',component:Componente2DetalleComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
