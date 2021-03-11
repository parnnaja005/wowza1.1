import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { crudApi } from 'src/app/home/crudapi'
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listMovie: any;
  constructor(private crudapi: crudApi,public router: Router,public navCtrl: NavController) {}
  ngOnInit() {
    this.crudapi.readAllmovie().subscribe(
      data=>{
        this.listMovie=data.map(
          d=>{
            return{
              id: d.payload.doc.id,
              image: d.payload.doc.data()['image'.toString()],
              title: d.payload.doc.data()['title'.toString()],
              description: d.payload.doc.data()['description'.toString()],
              rating: d.payload.doc.data()['rating'.toString()],
              time: d.payload.doc.data()['time'.toString()],
            }
          }
        )
      } 
    )

  }
  deleteItem(item){
    this.crudapi.deletemovie(item.id).then(data=>{
      console.log('delete success')
    })
  }
  updateItem(item){
    let dataProduct = JSON.stringify(item);   
    this.router.navigate(["edit-info", dataProduct]);
  }
  
  createitem(){
    this.navCtrl.navigateRoot("create");
  }
}
