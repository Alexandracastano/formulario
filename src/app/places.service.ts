import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Usuario } from './interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(
    private firestore: Firestore
  ) { }

  addPlace(place:Usuario){
    const placeRef = collection(this.firestore, 'places');
    return addDoc(placeRef, place)
  }
}
