import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgxToastrMessageComponent, NgxToastrMessageService } from 'ngx-toastr-message';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgxToastrMessageComponent],
  template: `
    <div class="example-container">
      <h1>NGX Toastr Message Examples</h1>
      
      <!-- Basic Toasts -->
      <section>
        <h2>Basic Toast Messages</h2>
        <button (click)="showSuccess()">Success</button>
        <button (click)="showError()">Error</button>
        <button (click)="showInfo()">Info</button>
        <button (click)="showWarning()">Warning</button>
      </section>

      <!-- Interactive Toasts -->
      <section>
        <h2>Interactive Clickable Toasts</h2>
        <button (click)="showNavigationToast()">Navigation Toast</button>
        <button (click)="showConfirmToast()">Confirmation Toast</button>
        <button (click)="showActionToast()">Action Toast</button>
      </section>

      <!-- Positioned Toasts -->
      <section>
        <h2>Different Positions</h2>
        <button (click)="showTopRight()">Top Right</button>
        <button (click)="showTopLeft()">Top Left</button>
        <button (click)="showBottomCenter()">Bottom Center</button>
      </section>
    </div>

    <!-- Toast Component - Add this once in your app -->
    <lib-ngx-toastr-message></lib-ngx-toastr-message>
  `,
  styles: `
    .example-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    
    section {
      margin: 30px 0;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    
    button {
      margin: 5px;
      padding: 10px 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      background: #007bff;
      color: white;
    }
    
    button:hover {
      background: #0056b3;
    }
  `
})
export class ExampleComponent {
  private toastrService = inject(NgxToastrMessageService);
  private router = inject(Router);

  // Basic toast messages
  showSuccess() {
    this.toastrService.show('Operation completed successfully!', 'success');
  }

  showError() {
    this.toastrService.show('Something went wrong!', 'error', {
      duration: 5000
    });
  }

  showInfo() {
    this.toastrService.show('Here is some useful information', 'info', {
      fontSize: 16
    });
  }

  showWarning() {
    this.toastrService.show('Please check your input', 'warning', {
      font: 'arial'
    });
  }

  // Interactive clickable toasts
  showNavigationToast() {
    this.toastrService.show('Click to go to dashboard', 'info', {
      duration: 6000,
      position: 'top-center',
      onClick: () => {
        console.log('Navigating to dashboard...');
        // this.router.navigate(['/dashboard']);
        alert('Would navigate to dashboard!');
      }
    });
  }

  showConfirmToast() {
    this.toastrService.show('Click to delete item', 'warning', {
      duration: 8000,
      onClick: () => {
        const confirmed = confirm('Are you sure you want to delete this item?');
        if (confirmed) {
          this.toastrService.show('Item deleted successfully!', 'success');
        }
      }
    });
  }

  showActionToast() {
    this.toastrService.show('New message received! Click to view', 'success', {
      duration: 10000,
      position: 'bottom-right',
      onClick: () => {
        console.log('Opening message...');
        alert('Opening new message!');
      }
    });
  }

  // Different positions
  showTopRight() {
    this.toastrService.show('Top Right Position', 'info', {
      position: 'top-right'
    });
  }

  showTopLeft() {
    this.toastrService.show('Top Left Position', 'success', {
      position: 'top-left'
    });
  }

  showBottomCenter() {
    this.toastrService.show('Bottom Center Position', 'warning', {
      position: 'bottom-center'
    });
  }
}
