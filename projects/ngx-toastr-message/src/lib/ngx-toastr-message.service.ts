import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PREDEFINED_FONTS } from './fonts';

export interface ToasterMessage {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  options?: {
    fontSize?: number;
    font?: keyof typeof PREDEFINED_FONTS;
    duration?: number; //added
    icon?: boolean | string;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';//positions
  };
}

@Injectable({
  providedIn: 'root',
})
export class NgxToastrMessageService {
  private messageSubject = new Subject<ToasterMessage>();
  public messages$ = this.messageSubject.asObservable();
  constructor() {}

  show(
    message: string,
    type: 'success' | 'error' | 'info' | 'warning',
    options?: {
      fontSize?: number;
      font?: keyof typeof PREDEFINED_FONTS;
      duration?: number; //added
      icon?: boolean | string;
      position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';//positions
    }
  ) {
    this.messageSubject.next({ message, type, options });
  }
}
