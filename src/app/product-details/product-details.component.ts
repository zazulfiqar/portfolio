import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared_services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  listData: any;
  id1: string | null;
  id2: string | null;
  prodDetails: any;
  brandDetails: any;
  constructor(

    private sharedService: SharedService,
    private route:ActivatedRoute

  ) {
    this.id1 = this.route.snapshot.paramMap.get('id1');
    this.id2 = this.route.snapshot.paramMap.get('id2');
    this.listData=this.sharedService.dataStord
 console.log(this.id2)
   
   this.brandDetails=this.listData.filter((prods:any)=>prods.id===this.id1);
   console.log(this.brandDetails[0].items);
   let prodDetails=this.brandDetails[0].items.filter((prod:any)=>prod.id===this.id2);
   console.log(this.prodDetails=prodDetails[0])
  }
  
  ngOnInit() {  this.scrollbarTop()}
  scrollbarTop(){

    window.scroll(0,0);
  }
}

