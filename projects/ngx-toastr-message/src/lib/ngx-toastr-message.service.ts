import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface ToasterMessage {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

@Injectable({
  providedIn: 'root',
})
export class NgxToastrMessageService {
  private messageSubject = new Subject<ToasterMessage>();
  public messages$ = this.messageSubject.asObservable();
  constructor() {}

  show(message: string, type: 'success' | 'error' | 'info' | 'warning') {
    this.messageSubject.next({ message, type });
  }
}
