import { Component, inject } from '@angular/core';
import {
  NgxToastrMessageComponent,
  NgxToastrMessageService,
} from '../../../ngx-toastr-message/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxToastrMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private toastrService = inject(NgxToastrMessageService);
  title = 'Angular Toast Notification Demo';

  // Basic toast messages
  showSuccessMessage() {
    this.toastrService.show('Operation completed successfully!', 'success', {
      fontSize: 14,
      duration: 3000,
      position: 'top-right'
    });
  }

  showErrorMessage() {
    this.toastrService.show('Something went wrong!', 'error', {
      fontSize: 14,
      duration: 4000,
      position: 'top-left'
    });
  }

  showInfoMessage() {
    this.toastrService.show('Here is some useful information.', 'info', {
      fontSize: 14,
      duration: 5000,
      position: 'bottom-right'
    });
  }

  showWarningMessage() {
    this.toastrService.show('Please review your input!', 'warning', {
      fontSize: 14,
      duration: 3500,
      position: 'bottom-left'
    });
  }

  // Toast messages with titles
  showSuccessWithTitle() {
    this.toastrService.show('Success!', 'Your profile has been updated successfully.', 'success', {
      fontSize: 14,
      duration: 4000,
      position: 'top-right'
    });
  }

  showErrorWithTitle() {
    this.toastrService.show('Error Occurred', 'Failed to save your changes. Please try again.', 'error', {
      fontSize: 14,
      duration: 5000,
      position: 'top-left'
    });
  }

  showInfoWithTitle() {
    this.toastrService.show('New Feature Available', 'Check out our latest dashboard improvements!', 'info', {
      fontSize: 14,
      duration: 6000,
      position: 'bottom-right'
    });
  }

  showWarningWithTitle() {
    this.toastrService.show('Action Required', 'Your session will expire in 5 minutes.', 'warning', {
      fontSize: 14,
      duration: 8000,
      position: 'bottom-left'
    });
  }

  // Clickable toast messages
  showClickableSuccess() {
    this.toastrService.show('Success!', 'Click me to view details!', 'success', {
      fontSize: 14,
      duration: 6000,
      position: 'top-center',
      onClick: () => {
        console.log('Success toast clicked!');
        alert('✅ Success details: Operation completed at ' + new Date().toLocaleTimeString());
      }
    });
  }

  showClickableError() {
    this.toastrService.show('Error Report', 'Click to report this error', 'error', {
      fontSize: 14,
      duration: 8000,
      position: 'bottom-center',
      onClick: () => {
        console.log('Error toast clicked!');
        const confirmed = confirm('❌ Would you like to report this error?');
        if (confirmed) {
          alert('Error report sent successfully!');
        }
      }
    });
  }

  showClickableInfo() {
    this.toastrService.show('New Feature!', 'New feature available! Click to learn more.', 'info', {
      fontSize: 16,
      font: 'arial',
      duration: 10000,
      position: 'top-right',
      onClick: () => {
        console.log('Info toast clicked!');
        window.open('https://angular.io', '_blank');
      }
    });
  }

  showClickableWarning() {
    this.toastrService.show('Action Required', 'Action required! Click to proceed.', 'warning', {
      fontSize: 14,
      duration: 7000,
      position: 'top-left',
      onClick: () => {
        console.log('Warning toast clicked!');
        const proceed = confirm('⚠️ Are you sure you want to proceed with this action?');
        if (proceed) {
          this.showSuccessMessage();
        }
      }
    });
  }

  // Demo: Multiple toasts at once
  showMultipleToasts() {
    // Show different types with slight delays
    this.showSuccessMessage();
    
    setTimeout(() => {
      this.showInfoWithTitle();
    }, 500);
    
    setTimeout(() => {
      this.showWarningMessage();
    }, 1000);
    
    setTimeout(() => {
      this.showClickableError();
    }, 1500);
  }
}
