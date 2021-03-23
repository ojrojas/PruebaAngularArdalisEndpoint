import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { State } from '../store/login.reducer';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  stateLogin: Observable<State>;
  constructor(private service: LoginService) { }

  ngOnInit(): void {
    this.stateLogin = this.service.getState();
  }

}
