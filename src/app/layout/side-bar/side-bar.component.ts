import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ApplicationUser } from 'src/app/models/application-user.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  userApp: ApplicationUser;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authServices: AuthService
  ) {
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    this.authServices.getUserApp().subscribe(x => this.userApp = x).unsubscribe();
  }

  logout(): void {
    window.location.href = 'login';
  }

}
