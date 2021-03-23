import { Injectable, Type } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { OptionsModal } from 'src/app/models/modal.model';
import { ModalSharedComponent } from '../container/modal-shared.component';


@Injectable({
  providedIn: 'root'
})
export class ModalSharedService {

  dialogRef: MatDialogRef<ModalSharedComponent>;
  constructor(private dialog: MatDialog) { }

  public open(options: OptionsModal): void {
    this.dialogRef = this.dialog.open(ModalSharedComponent, {
      data: {
        title: options.title,
        component: options.component,
        styles: options.CssStyles,
        parameters: options.parameters
      }
    });
  }

  public comfirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1), map(res => res)
    );
  }

  public close(): void {
    this.dialog.closeAll();
  }
}
