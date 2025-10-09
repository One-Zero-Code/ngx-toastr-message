# 🔔 NGX Toastr Message - Usage Guide

A lightweight, customizable toast notification library for Angular applications with click callback support.

## 📦 Installation

```bash
npm install ngx-toastr-message
```

## 🚀 Quick Start

### 1. Import in your Component

```typescript
import { Component, inject } from '@angular/core';
import { 
  NgxToastrMessageComponent, 
  NgxToastrMessageService 
} from 'ngx-toastr-message';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgxToastrMessageComponent], // Add the component
  template: `
    <button (click)="showToast()">Show Toast</button>
    
    <!-- Add the toast component to your template -->
    <lib-ngx-toastr-message></lib-ngx-toastr-message>
  `
})
export class ExampleComponent {
  private toastrService = inject(NgxToastrMessageService);

  showToast() {
    this.toastrService.show('Hello World!', 'success');
  }
}
```

### 2. For NgModule-based Applications

```typescript
import { NgModule } from '@angular/core';
import { NgxToastrMessageComponent } from 'ngx-toastr-message';

@NgModule({
  imports: [NgxToastrMessageComponent],
  // ... other module configuration
})
export class YourModule { }
```

## 🎯 Basic Usage Examples

### Simple Toast Messages

```typescript
export class MyComponent {
  private toastrService = inject(NgxToastrMessageService);

  // Success message
  showSuccess() {
    this.toastrService.show('Operation completed!', 'success');
  }

  // Error message
  showError() {
    this.toastrService.show('Something went wrong!', 'error');
  }

  // Info message
  showInfo() {
    this.toastrService.show('Here is some information', 'info');
  }

  // Warning message
  showWarning() {
    this.toastrService.show('Please check your input', 'warning');
  }
}
```

### Customized Toast Messages

```typescript
export class MyComponent {
  private toastrService = inject(NgxToastrMessageService);

  showCustomToast() {
    this.toastrService.show('Custom styled message', 'success', {
      fontSize: 16,           // Custom font size
      font: 'arial',          // Custom font family
      duration: 5000,         // Show for 5 seconds
      position: 'top-center'  // Custom position
    });
  }
}
```

## 🖱️ Interactive Clickable Toasts

### Basic Click Handler

```typescript
export class MyComponent {
  private toastrService = inject(NgxToastrMessageService);

  showClickableToast() {
    this.toastrService.show('Click me for more info!', 'info', {
      duration: 6000,
      onClick: () => {
        console.log('Toast was clicked!');
        alert('You clicked the toast!');
      }
    });
  }
}
```

### Advanced Click Handlers

```typescript
export class MyComponent {
  private toastrService = inject(NgxToastrMessageService);
  private router = inject(Router);

  // Navigate on click
  showNavigationToast() {
    this.toastrService.show('New feature available! Click to explore.', 'info', {
      duration: 8000,
      position: 'top-right',
      onClick: () => {
        this.router.navigate(['/new-feature']);
      }
    });
  }

  // Confirm action on click
  showConfirmationToast() {
    this.toastrService.show('Click to delete item', 'warning', {
      duration: 10000,
      onClick: () => {
        const confirmed = confirm('Are you sure you want to delete this item?');
        if (confirmed) {
          this.deleteItem();
          this.toastrService.show('Item deleted successfully!', 'success');
        }
      }
    });
  }

  // API call on click
  showApiToast() {
    this.toastrService.show('Click to refresh data', 'info', {
      duration: 7000,
      onClick: () => {
        this.refreshData();
      }
    });
  }

  private deleteItem() {
    // Your delete logic here
  }

  private refreshData() {
    // Your refresh logic here
  }
}
```

## 🎨 Configuration Options

### Position Options
- `'top-right'` (default)
- `'top-left'`
- `'top-center'`
- `'bottom-right'`
- `'bottom-left'`
- `'bottom-center'`

### Toast Types
- `'success'` - Green background
- `'error'` - Red background
- `'info'` - Blue background  
- `'warning'` - Orange background

### Available Fonts
- `'arial'`
- `'helvetica'`
- `'times'`
- `'courier'`
- `'verdana'`
- `'georgia'`
- `'palatino'`
- `'garamond'`
- `'bookman'`
- `'comic'`
- `'trebuchet'`
- `'impact'`

### Complete Options Interface

```typescript
interface ToastOptions {
  fontSize?: number;        // Font size in pixels
  font?: string;           // Font family (see available fonts above)
  duration?: number;       // Duration in milliseconds (default: 3000)
  position?: string;       // Position on screen (default: 'top-right')
  onClick?: () => void;    // Click callback function
}
```

## 🔥 Real-World Examples

### E-commerce Notifications

```typescript
export class ShoppingCartComponent {
  private toastrService = inject(NgxToastrMessageService);

  addToCart(product: Product) {
    // Add product to cart logic...
    
    this.toastrService.show(`${product.name} added to cart!`, 'success', {
      duration: 4000,
      position: 'bottom-right',
      onClick: () => {
        this.router.navigate(['/cart']);
      }
    });
  }

  onPaymentError() {
    this.toastrService.show('Payment failed. Click to retry.', 'error', {
      duration: 8000,
      onClick: () => {
        this.retryPayment();
      }
    });
  }
}
```

### Form Validation

```typescript
export class ContactFormComponent {
  private toastrService = inject(NgxToastrMessageService);

  onSubmitSuccess() {
    this.toastrService.show('Message sent successfully!', 'success', {
      duration: 5000,
      onClick: () => {
        this.router.navigate(['/thank-you']);
      }
    });
  }

  onValidationError() {
    this.toastrService.show('Please check required fields', 'warning', {
      duration: 6000,
      onClick: () => {
        this.scrollToFirstError();
      }
    });
  }
}
```

### System Notifications

```typescript
export class AppComponent implements OnInit {
  private toastrService = inject(NgxToastrMessageService);

  ngOnInit() {
    // Show update notification
    this.checkForUpdates();
  }

  checkForUpdates() {
    // Check for app updates...
    if (updateAvailable) {
      this.toastrService.show('New version available! Click to update.', 'info', {
        duration: 15000,
        position: 'top-center',
        onClick: () => {
          window.location.reload();
        }
      });
    }
  }
}
```

## 🎯 Best Practices

1. **Keep messages concise** - Toasts should be brief and actionable
2. **Use appropriate types** - Match toast type with message context
3. **Set reasonable durations** - Longer for important messages, shorter for confirmations
4. **Make clickable toasts obvious** - Use clear call-to-action text
5. **Handle errors gracefully** - Provide retry options for failed operations

## 🚨 Important Notes

- Only add `<lib-ngx-toastr-message></lib-ngx-toastr-message>` **once** in your app, typically in your root component
- The service is provided at root level, so you can inject it anywhere in your app
- Multiple toasts will stack automatically based on their position
- Clickable toasts show a visual indicator (👆 icon) to indicate interactivity

## 📱 Responsive Design

The library automatically adjusts toast sizes and positions for mobile devices, ensuring a great experience across all screen sizes.
