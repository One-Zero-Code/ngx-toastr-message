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
     @for (message of messages; track message.id; let i = $index) {
      <div
        class="toaster-message"
        [ngClass]="[message.type, getPositionClass(message), message.options?.onClick ? 'clickable' : '', message.title ? 'has-title' : '']"
        [style.fontSize.px]="message.options?.fontSize"
        [style.fontFamily]="message.options?.font ? PREDEFINED_FONTS[message.options?.font!] : 'inherit'"
        [ngStyle]="getStackedStyle(message, i)"
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
    pointer-events: none;
  }

  .toaster-message {
    position: fixed;
    margin: 10px;
    padding: 16px 20px;
    border-radius: 8px;
    min-width: 200px;
    max-width: 350px;
    color: white;
    font-weight: 500;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    animation: slideIn 0.3s ease-out;
    pointer-events: auto;
    word-wrap: break-word;
    z-index: 1001;
  }

  .toast-title {
    font-weight: 700;
    font-size: 1.1em;
    margin-bottom: 6px;
    line-height: 1.2;
    opacity: 0.95;
  }

  .toast-message {
    font-weight: 400;
    line-height: 1.4;
    opacity: 0.9;
  }

  .toaster-message.has-title {
    padding: 14px 20px 16px 20px;
  }

  .toaster-message.has-title .toast-message {
    font-size: 0.92em;
  }

  .toaster-message.clickable {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    position: relative;
  }

  .toaster-message.clickable:hover {
    transform: scale(1.03) translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.25);
  }

  .toaster-message.clickable:active {
    transform: scale(0.98);
  }

  .toaster-message.clickable::before {
    content: '👆';
    position: absolute;
    top: -8px;
    right: -8px;
    background: rgba(255,255,255,0.9);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    animation: bounce 2s infinite;
  }

  /* Positions with better spacing */
  .top-right { 
    top: 20px; 
    right: 20px; 
  }
  
  .top-left { 
    top: 20px; 
    left: 20px; 
  }
  
  .bottom-right { 
    bottom: 20px; 
    right: 20px; 
  }
  
  .bottom-left { 
    bottom: 20px; 
    left: 20px; 
  }
  
  .top-center { 
    top: 20px; 
    left: 50%; 
    transform: translateX(-50%); 
  }
  
  .bottom-center { 
    bottom: 20px; 
    left: 50%; 
    transform: translateX(-50%); 
  }

  /* Toast Types with Enhanced Colors */
  .success {
    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
    border-left: 4px solid #1e7e34;
  }

  .error {
    background: linear-gradient(135deg, #dc3545 0%, #e74c3c 100%);
    border-left: 4px solid #bd2130;
  }

  .info {
    background: linear-gradient(135deg, #17a2b8 0%, #3498db 100%);
    border-left: 4px solid #117a8b;
  }

  .warning {
    background: linear-gradient(135deg, #ffc107 0%, #f39c12 100%);
    color: #212529;
    border-left: 4px solid #d39e00;
  }

  /* Animations */
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-3px);
    }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .toaster-message {
      min-width: 280px;
      max-width: calc(100vw - 40px);
      margin: 5px;
    }
    
    .top-right, .bottom-right { right: 10px; }
    .top-left, .bottom-left { left: 10px; }
    .top-center, .bottom-center { 
      left: 50%; 
      transform: translateX(-50%); 
      max-width: calc(100vw - 20px);
    }
  }
`,
})
export class NgxToastrMessageComponent implements OnInit {
  messages: (ToasterMessage & { id: string })[] = [];
  PREDEFINED_FONTS = PREDEFINED_FONTS;
  private ngxToastrMessageService = inject(NgxToastrMessageService);
  private messageIdCounter = 0;

  ngOnInit(): void {
    this.ngxToastrMessageService.messages$.subscribe((message) => {
      const messageWithId = { 
        ...message, 
        id: `toast-${this.messageIdCounter++}-${Date.now()}` 
      };
      this.messages.push(messageWithId);
      const duration = message.options?.duration || 3000;
      
      // Auto-remove after duration
      setTimeout(() => this.removeMessage(messageWithId), duration);
    });
  }

  removeMessage(message: ToasterMessage & { id: string }) {
    this.messages = this.messages.filter((m) => m.id !== message.id);
  }

  onToastClick(message: ToasterMessage) {
    if (message.options?.onClick) {
      message.options.onClick();
    }
  }

  getPositionClass(message: ToasterMessage): string {
    return message.options?.position || 'top-right';
  }

  getStackedStyle(message: ToasterMessage & { id: string }, index: number): any {
    const position = message.options?.position || 'top-right';
    // Adjust spacing based on whether toast has title (taller toasts need more space)
    const spacing = message.title ? 85 : 70;
    const offset = index * spacing;
    
    const baseStyles = {
      'z-index': 1001 + index
    };

    // Apply stacking offset based on position
    if (position.includes('top')) {
      return { ...baseStyles, top: `${20 + offset}px` };
    } else {
      return { ...baseStyles, bottom: `${20 + offset}px` };
    }
  }
}
