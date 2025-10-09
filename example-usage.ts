import { Component, inject } from '@angular/core';
import { NgxToastrMessageService } from './projects/ngx-toastr-message/src/lib/ngx-toastr-message.service';

@Component({
  selector: 'app-example',
  template: `
    <h2>NGX Toastr Message - Click Example</h2>
    <button (click)="showRegularToast()">Regular Toast</button>
    <button (click)="showClickableToast()">Clickable Toast</button>
  `
})
export class SimpleExampleComponent {
  private toastrService = inject(NgxToastrMessageService);

  // Regular toast without click functionality
  showRegularToast() {
    this.toastrService.show('This is a regular message', 'success');
  }

  // Clickable toast with onClick callback
  showClickableToast() {
    this.toastrService.show('Click me for action!', 'info', {
      onClick: () => {
        alert('Toast was clicked!');
        console.log('User clicked the toast!');
      }
    });
  }
}

// Simple usage examples:

// Regular toast (no click action)
// this.toastrService.show('Settings saved!', 'success');

// Clickable toast (with action)
// this.toastrService.show('Click me!', 'info', {
//   onClick: () => alert('Clicked!')
// });