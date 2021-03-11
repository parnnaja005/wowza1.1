import { Injectable, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
    providedIn:"root",
})
export class crudApi{
    
    constructor(private fs:AngularFirestore){}

    readAllmovie(){
        return this.fs.collection('movie').snapshotChanges();
    }
    deletemovie(id){
        return this.fs.doc('movie/'+id).delete()
    }

    
}