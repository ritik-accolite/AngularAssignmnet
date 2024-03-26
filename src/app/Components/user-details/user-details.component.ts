import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: any = "";
  userDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const idParam: any = this.route.snapshot.paramMap.get('id');
    this.id = parseInt(idParam, 10); // Parse idParam to a number
    this.fetchUserDetails();
  }

  fetchUserDetails() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + this.id)
      .subscribe(
        userDetails => {
          this.userDetails = userDetails;
        },
        error => {
          console.error('Error fetching user details:', error);
        }
      );
  }
}
