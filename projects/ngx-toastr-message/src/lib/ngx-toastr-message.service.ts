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

  // Method overload: with title
  show(
    title: string,
    message: string,
    type: 'success' | 'error' | 'info' | 'warning',
    options?: {
      fontSize?: number;
      font?: keyof typeof PREDEFINED_FONTS;
      duration?: number;
      position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
      onClick?: () => void;
    }
  ): void;

  // Method overload: without title (backward compatibility)
  show(
    message: string,
    type: 'success' | 'error' | 'info' | 'warning',
    options?: {
      fontSize?: number;
      font?: keyof typeof PREDEFINED_FONTS;
      duration?: number;
      position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
      onClick?: () => void;
    }
  ): void;

  // Implementation
  show(
    titleOrMessage: string,
    messageOrType: string | 'success' | 'error' | 'info' | 'warning',
    typeOrOptions?: 'success' | 'error' | 'info' | 'warning' | {
      fontSize?: number;
      font?: keyof typeof PREDEFINED_FONTS;
      duration?: number;
      position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
      onClick?: () => void;
    },
    options?: {
      fontSize?: number;
      font?: keyof typeof PREDEFINED_FONTS;
      duration?: number;
      position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
      onClick?: () => void;
    }
  ) {
    let title: string | undefined;
    let message: string;
    let type: 'success' | 'error' | 'info' | 'warning';
    let finalOptions: typeof options;

    // Check if we have title (4 parameters) or just message (3 parameters)
    if (options !== undefined) {
      // Format: show(title, message, type, options)
      title = titleOrMessage;
      message = messageOrType as string;
      type = typeOrOptions as 'success' | 'error' | 'info' | 'warning';
      finalOptions = options;
    } else if (typeof typeOrOptions === 'string') {
      // Format: show(title, message, type) - no options
      title = titleOrMessage;
      message = messageOrType as string;
      type = typeOrOptions as 'success' | 'error' | 'info' | 'warning';
      finalOptions = undefined;
    } else {
      // Format: show(message, type, options) - backward compatibility
      title = undefined;
      message = titleOrMessage;
      type = messageOrType as 'success' | 'error' | 'info' | 'warning';
      finalOptions = typeOrOptions as typeof options;
    }

    this.messageSubject.next({ title, message, type, options: finalOptions });
  }
}
