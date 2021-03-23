import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderModel } from 'src/app/models/hader.model';

@Component({
  selector: 'app-header-pages',
  templateUrl: './header-pages.component.html',
  styleUrls: ['./header-pages.component.scss']
})
export class HeaderPagesComponent implements OnInit {

  @Input() headerModel: HeaderModel;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  back(): void {
    this.router.navigate(['/home']);
  }

}
