import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgxToastrMessageComponent,
  NgxToastrMessageService,
} from 'ngx-toastr-message';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxToastrMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private toastrService = inject(NgxToastrMessageService);
  title = 'my-app';
  showMessage() {
    this.toastrService.show('This is a success message!', 'success', {
      fontSize: 10,
    });
  }
}
