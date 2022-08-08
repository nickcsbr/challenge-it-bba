import { Component, OnInit } from '@angular/core';
import { IUserProfile } from 'src/app/core/models/i-user-profile';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user!: IUserProfile;


  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: "John Doe",
      title: "Diretor Itaú BBA",
      avatar: "https://material.angular.io/assets/img/examples/shiba1.jpg"
    }
  }

}
