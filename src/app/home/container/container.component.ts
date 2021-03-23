import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../services/home.service';
import { State } from '../store/home.reducer';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  homeState$: Observable<State>

  constructor(private service: HomeService) { }

  ngOnInit(): void {
   this.homeState$ = this.service.getState();
  }

}
