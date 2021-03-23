import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HorizontalPosition, VerticalPosition } from 'src/app/models/snack-bar.model';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackbar: MatSnackBar) { }

  public createNotification(
    message: string, action: string,
    duration: number,
    horizontalPosition: HorizontalPosition,
    verticalPosition: VerticalPosition): void {
    const horizontalPositionX: MatSnackBarHorizontalPosition = horizontalPosition;
    const verticalPositionY: MatSnackBarVerticalPosition = verticalPosition;
    this.snackbar.open(message, action, {
      duration,
      horizontalPosition: horizontalPositionX,
      verticalPosition: verticalPositionY
    });
  }
}
