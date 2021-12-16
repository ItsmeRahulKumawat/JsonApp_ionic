import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cats:any;
  constructor(public http:HttpClient, public router:Router) {
    this.loadData();
  }

  ngOnInit() {
    
  }

  loadData(){
    let data:Observable<any>
    data = this.http.get('assets/backend/db.json');
    data.subscribe(result => {
      this.cats = result;
      console.log(this.cats);
    },
    (err) => {
      alert('failed loading json data');
   });
  }

  name:string;
  origin:string;
  averagelife:string;
  breed:string;
  url:string;

  SendDataFu(){ 

    let postData =  {
     AltName:this.name,
     Origin:this.origin,
     Averagelife:this.averagelife,
     BreedDesc:this.breed,
     url:this.url
 }
  
    this.http.post("assets/backend/db.json", postData,{observe: 'response'})
      .subscribe(data => {
        console.log(data);
       
       }, error => {
        console.log(error);
      });
      
  }
}
