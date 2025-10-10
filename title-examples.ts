import { Component, inject } from '@angular/core';
import { NgxToastrMessageService } from './projects/ngx-toastr-message/src/lib/ngx-toastr-message.service';

@Component({
  selector: 'app-title-examples',
  template: `
    <h2>Toast Messages with Titles</h2>
    
    <div class="button-group">
      <h3>Messages with Titles</h3>
      <button (click)="showSuccessWithTitle()">Success with Title</button>
      <button (click)="showErrorWithTitle()">Error with Title</button>
      <button (click)="showInfoWithTitle()">Info with Title</button>
      <button (click)="showWarningWithTitle()">Warning with Title</button>
    </div>

    <div class="button-group">
      <h3>Messages without Titles (Backward Compatibility)</h3>
      <button (click)="showRegularSuccess()">Regular Success</button>
      <button (click)="showRegularError()">Regular Error</button>
    </div>
  `,
  styles: `
    .button-group {
      margin: 20px 0;
    }
    button {
      margin: 5px;
      padding: 8px 12px;
      border: none;
      border-radius: 4px;
      background: #007bff;
      color: white;
      cursor: pointer;
    }
  `
})
export class TitleExamplesComponent {
  private toastrService = inject(NgxToastrMessageService);

  // Examples with titles
  showSuccessWithTitle() {
    this.toastrService.show('Success!', 'Operation completed successfully', 'success', {
      fontSize: 14,
      duration: 4000
    });
  }

  showErrorWithTitle() {
    this.toastrService.show('Error!', 'Something went wrong', 'error', {
      fontSize: 14,
      duration: 5000,
      position: 'top-left'
    });
  }

  showInfoWithTitle() {
    this.toastrService.show('Information', 'Here is some useful information', 'info', {
      fontSize: 12,
      duration: 6000,
      position: 'bottom-right'
    });
  }

  showWarningWithTitle() {
    this.toastrService.show('Warning!', 'Please check your input', 'warning', {
      fontSize: 14,
      duration: 4000,
      position: 'top-center'
    });
  }

  // Examples without titles (backward compatibility)
  showRegularSuccess() {
    this.toastrService.show('This is a regular success message', 'success', {
      duration: 3000
    });
  }

  showRegularError() {
    this.toastrService.show('This is a regular error message', 'error', {
      duration: 4000
    });
  }
}

// // Usage Examples:

// // With title (new feature):
// this.toastrService.show('Title Here', 'This is a success message!', 'success', {
//   fontSize: 14
// });

// // Without title (backward compatible):
// this.toastrService.show('This is a success message!', 'success', {
//   fontSize: 14
// });

// // More examples with titles:
// this.toastrService.show('Upload Complete', 'Your file has been uploaded successfully', 'success');
// this.toastrService.show('Connection Lost', 'Unable to connect to server', 'error');
// this.toastrService.show('New Feature', 'Check out our latest update!', 'info');
// this.toastrService.show('Storage Full', 'Please free up some space', 'warning');
