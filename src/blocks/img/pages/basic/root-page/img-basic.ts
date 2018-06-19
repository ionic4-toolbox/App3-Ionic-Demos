import { Component } from '@angular/core';


@Component({
  templateUrl: 'img-basic.html'
})
export class ImgBasic {
  images = [
    {
      width: '100',
      height: '44',
      src: 'assets/img/batmobile.jpg'
    },
    {
      width: '100',
      height: '75',
      src: 'assets/img/knight-rider.jpg'
    },
    {
      width: '100',
      height: '68',
      src: 'assets/img/general-lee.jpg'
    }
  ];
}