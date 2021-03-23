import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicationUser } from 'src/app/models/application-user.model';
import { UsersAppService } from '../../services/users-app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnChanges {

  @Input() applicationUsers: ApplicationUser[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output() edit: EventEmitter<ApplicationUser> = new EventEmitter<ApplicationUser>();
  @Output() delete: EventEmitter<ApplicationUser> = new EventEmitter<ApplicationUser>();
  @Output() detail: EventEmitter<ApplicationUser> = new EventEmitter<ApplicationUser>();

  displayedColumns: string[] = ['identificationType', 'identification', 'name', 'lastName', 'email', 'edit', 'detail', 'delete'];
  dataSource: MatTableDataSource<ApplicationUser>;

  constructor(
    private service: UsersAppService
    ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.applicationUsers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


