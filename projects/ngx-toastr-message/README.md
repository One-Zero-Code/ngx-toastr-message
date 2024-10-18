# ngx-toastr-message
## A lightweight, customizable Angular library for displaying toast notifications.

### Dependencies
Latest version available for each version of Angular
<table style="border:1px solid">
    <tr>
    <th style="border:1px solid">ngx-toastr-message</th>
    <th>Angular</th>
    <tr>
    <tr>
    <td style="border:1px solid">0.0.2</td>
    <td>18.2.x</td>
    </tr>
    <tr>
    <td style="border:1px solid">0.0.1</td>
    <td>18.2.x</td>
    </tr>
</table>

### Install
```
npm i ngx-toastr-message
```

### Setup
app.component.ts
```
import {
  NgxToastrMessageComponent,
  NgxToastrMessageService,
} from 'ngx-toastr-message';
```
```
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxToastrMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
```
### Use
app.component.html
```
<lib-ngx-toastr-message></lib-ngx-toastr-message>
```
app.component.ts
```
private toastrService = inject(NgxToastrMessageService);
showMessage() {
    this.toastrService.show('This is a success message!', 'success');
}
```
### Options
```
this.toastrService.show('This is a success message!', 'success');
this.toastrService.show('This is a error message!', 'error');
this.toastrService.show('This is a info message!', 'info');
this.toastrService.show('This is a warning message!', 'warning');
```

You can add a custom font
```
this.toastrService.show('This is a success message!', 'success', {
  fontSize: 14
});

```

### License
MIT