import { SharedService } from './shared_services/shared.service';
import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @Output() dataEvent = new EventEmitter<string>();

  title = 'mobileHub';
  data: any;
  InputList: any;

  constructor(

    private homeService: HomeService,
    public sharedService: SharedService

  ) {
    this.homeService.getDataList().subscribe((res:any)=>{
      this.data=res;
      this.sharedService.dataStord=this.data;
    })
  }
  ngOnInit() {}
}

