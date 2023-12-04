import { SharedService } from './../shared_services/shared.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  data: any;
  receivedData: any;
  listData: any;

  constructor(

    private sharedService: SharedService,
    private router:Router

  ) {
   console.log(this.listData=this.sharedService.dataStord);
  }

  ngOnInit() {  }

  prodDetails(brandId:any,prodId:any){
    this.router.navigate(['/product-details', brandId, prodId]);
  }

}
