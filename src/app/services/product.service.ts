import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    //console.log('ProductService funcionando');
  }

  //Metodo GET para obtener todos los productos
  getAllProducts(): Observable<Product> {
    const url = `${this.apiUrl}/products`;
    return this.http.get<Product>(url);
  }

  //Metodo POST para guardar los datos del contacto
  saveContact(contacto: Contacto) {
    const url = `${this.apiUrl}/contacto`;
    return this.http.post<Contacto>(url, contacto);
  }
}
