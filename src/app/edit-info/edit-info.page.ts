import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.page.html',
  styleUrls: ['./edit-info.page.scss'],
})
export class EditInfoPage implements OnInit {

  constructor( public actroute: ActivatedRoute, public navCtrl: NavController,private afs: AngularFirestore,) { }
 
  detailProduct: any;
  getImage: any;
  getDescription: string;
  getrating: string;
  gettitle: string;
  gettime: string;
  IDProduct: String;

  ngOnInit() {
    const dataRev = this.actroute.snapshot.paramMap.get('dataProduct');
    this.detailProduct = JSON.parse(dataRev);
    console.log(JSON.parse(dataRev))
    this.getImage = this.detailProduct['image'];
    this.gettitle= this.detailProduct['title'];
    this.getDescription = this.detailProduct['description'];
    this.getrating = this.detailProduct['rating'];
    this.gettime = this.detailProduct['time'];
    this.IDProduct = this.detailProduct['id'];

    
  }
  updateProduct(){
    let newDataProduct = {};
    newDataProduct['image'] = this.getImage;
    newDataProduct['title'] = this.gettitle;
    newDataProduct['description'] = this.getDescription;
    newDataProduct['rating'] = this.getrating;
    newDataProduct['time'] = this.gettime;
    this.afs.doc('movie/' + this.IDProduct).update(newDataProduct).then(data=>{
      this.navCtrl.navigateRoot("home")
      
    }
      
    )
  }
  
  back(){
    this.navCtrl.pop()
  }

}
