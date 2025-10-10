import { Component, inject, OnInit } from '@angular/core';
import {
  NgxToastrMessageService,
  ToasterMessage,
} from './ngx-toastr-message.service';
import { CommonModule } from '@angular/common';
import { PREDEFINED_FONTS } from './fonts';

@Component({
  selector: 'lib-ngx-toastr-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toaster-container">
     @for (message of messages; track message) {
      <div
        class="toaster-message"
        [ngClass]="[message.type, getPositionClass(message), message.options?.onClick ? 'clickable' : '']"
        [style.fontSize.px]="message.options?.fontSize"
        [style.fontFamily]="message.options?.font ? PREDEFINED_FONTS[message.options?.font!] : 'inherit'"
        (click)="onToastClick(message)"
      >
        @if (message.title) {
          <div class="toast-title">{{ message.title }}</div>
        }
        <div class="toast-message">{{ message.message }}</div>
      </div>
    }
    </div>
  `,
  styles: `
  .toaster-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
}

.toaster-message {
  position: fixed;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  color: white;
}

.toaster-message.clickable {
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;
}

.toaster-message.clickable:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.toaster-message.clickable:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.toast-title {
  font-weight: bold;
  margin-bottom: 4px;
  font-size: 1.1em;
}

.toast-message {
  line-height: 1.3;
}

/* Positions */
  .top-right    { top: 20px; right: 20px; }
  .top-left     { top: 20px; left: 20px; }
  .bottom-right { bottom: 20px; right: 20px; }
  .bottom-left  { bottom: 20px; left: 20px; }
  .top-center   { top: 20px; left: 50%; transform: translateX(-50%); }
  .bottom-center{ bottom: 20px; left: 50%; transform: translateX(-50%); }

.success {
  background-color: green;
}

.error {
  background-color: red;
}

.info {
  background-color: blue;
}

.warning {
  background-color: orange;
}
`,
})
export class NgxToastrMessageComponent implements OnInit {
  messages: ToasterMessage[] = [];
  PREDEFINED_FONTS = PREDEFINED_FONTS;
  private ngxToastrMessageService = inject(NgxToastrMessageService);

  ngOnInit(): void {
    this.ngxToastrMessageService.messages$.subscribe((message) => {
      this.messages.push(message);
      const duration = message.options?.duration || 3000;
      //setTimeout uses duration to display message for a certain time
      setTimeout(() => this.removeMessage(message), duration);
    });
  }

  removeMessage(message: ToasterMessage) {
    this.messages = this.messages.filter((m) => m !== message);
  }

  onToastClick(message: ToasterMessage) {
    if (message.options?.onClick) {
      message.options.onClick();
    }
  }

  getPositionClass(message: ToasterMessage): string {
    return message.options?.position || 'top-right';
  }
}
