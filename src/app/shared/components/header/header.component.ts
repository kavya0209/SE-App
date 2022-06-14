import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
   
    
  }

  logOut()
  {
    // console.log("logout called");
    // Auth.signOut()
    //   .then(data => {
      
     
     
      
    //   this.router.navigate(['login']);
     
    //   })
    //   .catch((error: any) => {

    //   console.log("error");
    //   console.log(error);
      
     
    //   })
  }

}
