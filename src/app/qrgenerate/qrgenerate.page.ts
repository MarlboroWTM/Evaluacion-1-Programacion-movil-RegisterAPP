import { Component } from '@angular/core';

@Component({
  selector: 'app-qrgenerate',
  templateUrl: './qrgenerate.page.html',
  styleUrls: ['./qrgenerate.page.scss'],
})
export class QrgeneratePage {
  qrData = 'https://drive.google.com/drive/folders/1YJTT4uB3SHfY0wEI487X-Q8arUw2auy0';
  imageSrc: string = 'assets/img/your-logo.png';

  constructor() { }
}
