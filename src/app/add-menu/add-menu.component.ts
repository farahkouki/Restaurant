import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  id!:number;
 //home !:Home;

  constructor(private hs :HomeService, private router:Router) { }
  homes = [
    {id:1 , title :' farah ', description : 'good' , approved : true , reservations : 5 ,  image:"../../assets/images/1.jpg"},
    {id:2 , title :' farah ', description : 'good' , approved : true , reservations : 5 ,  image:"../../assets/images/2.jpg"},
    {id:3 , title :' farah ', description : 'good' , approved : true , reservations : 5 ,  image:"../../assets/images/3.jpg"},
    
  ]

formLogin = new FormGroup({
  id: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]), // ID doit être un nombre
  title: new FormControl('', [Validators.required, Validators.minLength(3)]), // Minimum 3 caractères
  description: new FormControl('', [Validators.required, Validators.minLength(3)]), // Minimum 3 caractères
  approved :new FormControl(false, [Validators.requiredTrue]),
  reservations: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]), // ID doit être un nombre

 // description: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]), // Nombre ou nombre avec 2 décimales
 // reservationDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/) ]), // date
  

  })


  add(){
   this.hs.homes.push(this.formLogin.value as any)
   this.router.navigate(['/home'])
  }
//ngOnInit (){
  //1- recuperer l'id 
 //this.id=this.home.Snapshot.params['id']
  //2 -recuperer 
  //this.homes.getHomeById(this.id).subscribe(
  //  data => this.home=data,
   // this.homeForm.patchValue(this.home); )
//}
  }//
