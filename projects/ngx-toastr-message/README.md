# ngx-toastr-message
## A lightweight, customizable Angular library for displaying toast notifications.

### Dependencies
Latest version available for each version of Angular
<table style="border:1px solid">
    <tr>
        <th style="border:1px solid">ngx-toastr-message</th>
        <th>Angular</th>
    </tr>
        <tr>
        <td style="border:1px solid">0.4.0</td>
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

1. Change the font size; it should be in pixels.
```
this.toastrService.show('This is a success message!', 'success', {
  fontSize: 14
});
```

2. Change the font family.
```
this.toastrService.show('This is a success message!', 'success', {
  fontSize: 14,
  font: 'arial',
});
```
Available fonts:
```
roboto: "'Roboto', sans-serif",
arial: "Arial, sans-serif",
verdana: "Verdana, sans-serif",
tahoma: "Tahoma, sans-serif",
georgia: "Georgia, serif",
times: "'Times New Roman', serif",
courier: "'Courier New', monospace",
trebuchet: "'Trebuchet MS', sans-serif",
lucida: "'Lucida Sans Unicode', sans-serif",
impact: "Impact, sans-serif",
```

3. Change the duration (in milliseconds):
```typescript
this.toastrService.show('This is a success message!', 'success', {
  duration: 5000 // Shows for 5 seconds
});
```

4. Customizable positions and small presets
```
this.toastrService.show('This is a success message!', 'success', {
  fontSize: 10,
  font: 'impact',
  duration: 2000,
  position: 'bottom-left'
});
```

Positions:
```
/* Positions */
.top-right    { top: 20px; right: 20px; }
.top-left     { top: 20px; left: 20px; }
.bottom-right { bottom: 20px; right: 20px; }
.bottom-left  { bottom: 20px; left: 20px; }
.top-center   { top: 20px; left: 50%; transform: translateX(-50%); }
.bottom-center{ bottom: 20px; left: 50%; transform: translateX(-50%); }
```

5. Customizable Toastr Icons

You can now customize the icons displayed in your toastr messages.

Install Font Awesome
Install Font Awesome version 4.7.0:

```bash
npm install font-awesome@4.7.0 --save
```
Import Font Awesome CSS

In your angular.json file, add the Font Awesome stylesheet under the styles array (if not already included):
```json
"styles": [
  "node_modules/font-awesome/css/font-awesome.min.css",
  "src/styles.css"
]
```

This enables the default icon according to the message type (success, warning, info, error).

Examples
Enable the default icon
```typeScript
this.toastrService.show('This is a success message!', 'success', {
  icon: true
});
```
Disable the icon
```typeScript
this.toastrService.show('This is a success message!', 'success', {
  icon: false
});
```
Add a custom icon
```typeScript
this.toastrService.show('This is a success message!', 'success', {
  icon: 'fa fa-check'
});
```

6. Show a progress bar and Change progress bar color
```
this.toastrService.show('Uploading file...', 'info', {
  showProgressBar: true // Displays a bottom progress indicator
});
```
```
this.toastrService.show('Processing data...', 'info', {
  showProgressBar: true,
  progressBarColor: '#4caf50' // Green progress bar
});
```

7. Show close button
```
this.toastrService.show('Error occurred while saving!', 'error', {
  showCloseButton: true // Adds a close (×) button
});
```

### License
MIT