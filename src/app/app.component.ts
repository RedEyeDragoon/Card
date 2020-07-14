import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  posts = [
    { 
      title: 'Neat Tree',
      imageUrl: 'https://ichef.bbci.co.uk/images/ic/960x960/p08634k6.jpg',
      username: 'nature',
      content: 'I saw this awesome tree during my hike'
    },
    { 
      title: 'Snowy Mountain',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61nR-hxJBfL._AC_SX466_.jpg',
      username: 'mountainlover',
      content: 'Pic of snowy mountain'
    },
    { 
      title: 'Mountain Biking',
      imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/21/2019/03/tomtom-1501598547896-ylic7l22ht2l-9f277cf.jpg?quality=90&resize=768,574',
      username: 'biking1222',
      content: 'Hit the trails hard today'
    },
  ];
}
