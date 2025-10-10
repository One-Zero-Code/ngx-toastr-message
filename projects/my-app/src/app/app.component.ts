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
  // styleUrl: './app.component.scss',
})
export class AppComponent {
  private toastrService = inject(NgxToastrMessageService);
  title = 'my-app';
  showMessage() {
    this.toastrService.show('This is a success message!', 'success', {
      fontSize: 10,
      font: 'impact',
      duration:2000,
      position: 'bottom-left',
      icon: true
    });
  }

 

  showMessageWithTitle() {
    this.toastrService.show('Success!', 'This is a success message with title!', 'success', {
      fontSize: 14,
      duration: 4000,
      position: 'top-right'
    });
  }
}
