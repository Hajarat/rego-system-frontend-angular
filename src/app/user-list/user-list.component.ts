import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.loading = true
    this.http.get('http://localhost:8080/Registration/ViewUsersServlet?format=json').subscribe(data => {
      console.log(data)
      this.data = data
      this.loading = false
    })
  }
}
