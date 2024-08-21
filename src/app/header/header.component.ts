import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthserviceService } from '../auth/authservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService, private authServer: AuthserviceService) {

  }
  //subscribes to every user change
  userSubsctription: Subscription;
  isAuthenticated : boolean=false;
  ngOnInit(): void {
    this.userSubsctription = this.authServer.userHandle.subscribe((user)=>{
      this.isAuthenticated= user?true:false;
    })
  }

  saveRecipesToFb() {
    this.dataStorageService.saveRecipiesToFirebase();
  }

  fetchRecipesFromFb() {
    this.dataStorageService.fetchRecipesFromFireBase().subscribe();
  }
}
