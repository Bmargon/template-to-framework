import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto;
  id: string;
  constructor( private route: ActivatedRoute, public ps: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params.id;

      this.ps.getProduct(params.id).subscribe( producto => {
        this.producto = producto;
      });
    });
  }

}
