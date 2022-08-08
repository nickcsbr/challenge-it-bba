import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  displayMessage(message: string, action: string): Observable<boolean> {
    const result = new Subject<boolean>();

    this.snackBar.open(message, action).afterDismissed().subscribe(response => {
      result.next(true);
      result.complete();
    },
    error => {
      result.next(false);
      result.complete();
    });   

    return result.asObservable();
  }
}
