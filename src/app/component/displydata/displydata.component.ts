import { Component, OnInit } from '@angular/core';
import Userjson from 'users.json';

interface USERS {
  id: number;
  date: string;
  billingname: string;
  amount: string;
  orderstatus: string;
}
@Component({
  selector: 'app-displydata',
  templateUrl: './displydata.component.html',
  styleUrls: ['./displydata.component.css'],
})
export class DisplydataComponent implements OnInit {
  Users: USERS[] = Userjson;
  constructor() {
    console.log(this.Users);
  }

  ngOnInit(): void {}
}
