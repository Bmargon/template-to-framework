import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public ips: InfoPaginaService,
               private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( item: string ) {
    if ( item.length < 1) {
      return;
    }
    this.router.navigate(['/search', item]);
  }
}
