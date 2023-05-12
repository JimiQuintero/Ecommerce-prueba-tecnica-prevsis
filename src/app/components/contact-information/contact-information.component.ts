import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacto } from '../../models/contacto';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css'],
})
export class ContactInformationComponent implements OnInit {
  _productService = inject(ProductService);
  _router = inject(Router);

  public contacto: Contacto = {
    nombres: '',
    apellidos: '',
    direccion: '',
    apartamento: '',
    pais: '',
    ciudad: '',
    municipio: '',
    cp: '',
    telefono: '',
    empresa: '',
    email: '',
  };

  constructor() {}

  ngOnInit(): void {}

  guardarContacto(contacto: Contacto) {
    console.log(contacto);
    this._productService
      .saveContact(this.contacto)
      .subscribe((resp: Contacto) => {
        //console.log(resp);
        this._router.navigate(['/payment']);
      });
  }

  backToProducts() {
    this._router.navigate(['/home']);
  }
}
