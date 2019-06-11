import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: any[];
  productosFiltrados: any[];
  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-template-62cab.firebaseio.com/productos_idx.json').subscribe((resp: any) => {
        this.productos = resp;
        console.log(resp);
        this.cargando = false;
        resolve();
      });
    });

  }

  getProduct( id: string) {
    const url = `https://angular-template-62cab.firebaseio.com/productos/${id}.json`;
    return this.http.get(url);
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      // cargar
      this.cargarProductos().then(() => {
        // filtro
        this.filtrarProductos(termino);
      });
    } else {
      // filtro
      this.filtrarProductos(termino);

    }
  }

  private filtrarProductos(termino: string) {
    console.log(this.productos);
    this.productos.forEach(prod => {
      if ( prod.categoria.indexOf(termino) >= 0) {
        this.productosFiltrados.push(prod);
      }
    });
  }
}
