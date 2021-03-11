import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor( public actroute: ActivatedRoute, public navCtrl: NavController,private afs: AngularFirestore,) { }
  detailProduct: any;
  getImage: any;
  getDescription: string;
  getrating: string;
  gettitle: string;
  gettime: string;
  IDProduct: String;

  ngOnInit() {
  }


  addMovie(){
    let newDataProduct = {};
    newDataProduct['image'] = this.getImage;
    newDataProduct['title'] = this.gettitle;
    newDataProduct['description'] = this.getDescription;
    newDataProduct['rating'] = this.getrating;
    newDataProduct['time'] = this.gettime;
    this.afs.collection('movie').add(newDataProduct).then(res=>{
      console.log("add success")
      this.navCtrl.navigateRoot("home");
    }).catch(err=>{
      console.error(err)
    })
  }
}
