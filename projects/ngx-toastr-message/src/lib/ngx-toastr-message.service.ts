import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PREDEFINED_FONTS } from './fonts';

export interface ToasterMessage {
  title?: string; // optional title
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  options?: {
    fontSize?: number;
    font?: keyof typeof PREDEFINED_FONTS;
    duration?: number; //added
    icon?: boolean | string;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';//positions
    onClick?: () => void; // callback function for click events
  };
}

@Injectable({
  providedIn: 'root',
})
export class NgxToastrMessageService {
  private messageSubject = new Subject<ToasterMessage>();
  public messages$ = this.messageSubject.asObservable();
  constructor() {}

  // Method overloads for backward compatibility and new title feature
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
    let title: string | undefined;
    let message: string;
    let type: 'success' | 'error' | 'info' | 'warning';
    let finalOptions: any;

    // Check if first parameter is title (4 parameters) or message (3 parameters)
    if (arguments.length >= 4 || (arguments.length === 3 && typeof typeOrOptions === 'string')) {
      // New signature: show(title, message, type, options)
      title = titleOrMessage;
      message = messageOrType as string;
      type = typeOrOptions as 'success' | 'error' | 'info' | 'warning';
      finalOptions = options;
    } else {
      // Old signature: show(message, type, options)
      title = undefined;
      message = titleOrMessage;
      type = messageOrType as 'success' | 'error' | 'info' | 'warning';
      finalOptions = typeOrOptions;
    }

    this.messageSubject.next({ title, message, type, options: finalOptions });
  }
}
