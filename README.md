# 🔔 ngx-toastr-message

<p align="center">
  <strong>A lightweight, customizable Angular toast notification library with click callback support</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/ngx-toastr-message" alt="npm version">
  <img src="https://img.shields.io/npm/dm/ngx-toastr-message" alt="npm downloads">
  <img src="https://img.shields.io/github/license/prateekverma145/ngx-toastr-message" alt="license">
  <img src="https://img.shields.io/bundlephobia/min/ngx-toastr-message" alt="bundle size">
</p>

## ✨ Features

- 🎯 **Four Toast Types**: Success, Error, Info, Warning
- 📍 **Flexible Positioning**: 6 different positions (top-right, top-left, bottom-right, bottom-left, top-center, bottom-center)
- 🖱️ **Interactive Toasts**: Click callbacks for custom actions
- 🎨 **Customizable Styling**: Font size, font family, duration control
- 📱 **Responsive Design**: Automatically adapts to mobile devices
- 🪶 **Lightweight**: Minimal bundle size impact
- 🔧 **TypeScript Support**: Full type safety
- 🚀 **Angular 18+ Compatible**: Works with latest Angular versions
- 📦 **Standalone Components**: No NgModule required

## 🚀 Quick Start

### Installation
```bash
npm install ngx-toastr-message
```

### Basic Usage
```typescript
import { Component, inject } from '@angular/core';
import { NgxToastrMessageComponent, NgxToastrMessageService } from 'ngx-toastr-message';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgxToastrMessageComponent],
  template: `
    <button (click)="showToast()">Show Toast</button>
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

### Interactive Clickable Toasts
```typescript
showClickableToast() {
  this.toastrService.show('Click me for action!', 'info', {
    duration: 5000,
    position: 'top-right',
    onClick: () => {
      console.log('Toast clicked!');
      // Navigate, show modal, API call, etc.
      this.router.navigate(['/details']);
    }
  });
}
```

## 📖 Complete Documentation

For detailed usage examples, configuration options, and real-world scenarios, see [USAGE.md](./USAGE.md).

## 🎯 API Reference

### Service Methods
```typescript
show(message: string, type: ToastType, options?: ToastOptions): void
```

### Configuration Options
```typescript
interface ToastOptions {
  fontSize?: number;        // Font size in pixels
  font?: string;           // Font family
  duration?: number;       // Duration in milliseconds (default: 3000)
  position?: Position;     // Toast position (default: 'top-right')
  onClick?: () => void;    // Click callback function
}
```

## 🛠️ Development

### Building the Library
```bash
ng build ngx-toastr-message
```

### Running Tests
```bash
ng test ngx-toastr-message
```

### Running the Demo App
```bash
ng serve
```

### Contributing to ngx-toastr-message
Thank you for your interest in contributing to ngx-toastr-message! We appreciate your help in improving this project. Please follow the guidelines below to make your contributions smooth and effective.

### Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Guidelines](#development-guidelines)
- [Submitting Changes](#submitting-changes)
- [License](#license)

#### Getting Started

1. **Fork the Repository**: Click the "Fork" button on the top right of this page to create a copy of the repository in your GitHub account.
2. **Clone Your Fork**: Clone your forked repository to your local machine.
   ```bash
   git clone https://github.com/One-Zero-Code/ngx-toastr-message.git
   cd ngx-toastr-message
3. **Install Dependencies**: Install the necessary dependencies for development
    ```bash
    npm install
    ```
4. **Build Libary**:
    ```bash
    ng build ngx-toastr-message
    ```

5. **Install Libary**
    ```bash
    npm install ./dist/ngx-toastr-message
    ```

#### How to Contribute
We welcome contributions in various forms, including:

1. Bug Fixes: Report and fix bugs.
2. New Features: Suggest and implement new features.
3. Documentation: Improve documentation and examples.
4. Code Review: Review pull requests from other contributors.

#### Development Guidelines
1. Follow the existing code style.
2. Write unit tests for new features and bug fixes. Ensure that all tests pass before submitting your pull request.
3. Document your code where necessary to maintain clarity and usability.

#### Submitting Changes
1. **Create a New Branch**: Create a new branch for your changes.
    ```
    git checkout -b your-feature-name
    ```
2. **Make Your Changes**: Implement your changes and test them thoroughly.
3. **Commit Your Changes**: Commit your changes with a clear and concise commit message.
    ```
    git commit -m "Add your commit message here"
    ```
4. **Push to Your Fork**: Push your changes to your forked repository.
    ```
    git push origin your-feature-name
    ```
5. **Open a Pull Request**: Navigate to the original repository and open a pull request. Provide a clear description of your changes and any relevant context.

#### License
By contributing to [Your Angular Library Name], you agree that your contributions will be licensed under the MIT License.

Thank you for your contributions!