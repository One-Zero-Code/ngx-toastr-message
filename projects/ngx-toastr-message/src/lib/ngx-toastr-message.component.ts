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
          [ngClass]="[message.type, getPositionClass(message)]"
          [style.fontSize.px]="message.options?.fontSize"
          [style.fontFamily]="message.options?.font ? PREDEFINED_FONTS[message.options?.font!] : 'inherit'"
        >
          <div class="toast-content">
            <span class="toast-icon">
              <i [class]="getIconClass(message)"></i>
            </span>
            <span class="toast-text">{{ message.message }}</span>
          </div>
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
.toast-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.toast-icon {
  font-size: 18px;
}

.toaster-message {
  position: fixed;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 150px;
  color: white;
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

  getPositionClass(message: ToasterMessage): string {
    return message.options?.position || 'top-right';
  }
  getIconClass(message: ToasterMessage): string {
    const iconOption = message.options?.icon;

    //if icon is a custom string, use it
    if (typeof iconOption === 'string') return iconOption;

    //if icon = true, auto-select icon based on type
    if (iconOption === true) {
      switch (message.type) {
        case 'success':
          return 'fa fa-check-circle';
        case 'error':
          return 'fa fa-times-circle';
        case 'info':
          return 'fa fa-info-circle';
        case 'warning':
          return 'fa fa-exclamation-triangle';
      }
    }

    // No icon
    return '';
    }
  }
