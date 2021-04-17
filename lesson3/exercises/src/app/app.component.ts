import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;
  rightEnabled: boolean = true;
  downEnabled: boolean = true;
  leftEnabled: boolean = true;
  upEnabled: boolean = true;


  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
      this.color = 'blue';
      this.height = 10000;
      this.width = 0;
      this.message = 'Shuttle in flight.';
    }
    this.takeOffEnabled = false;
  }

  gutterCheck(width, height) {
    if (this.height > 320000 || this.width > 360000 || height < 0 || width < 0) {
      if (height < 0) {
        this.downEnabled = false;
      }
      if (height > 320000) {
        this.upEnabled = false;
      }
      this.color = 'orange'
    } else {
      this.color = 'blue';
      this.downEnabled = true;
      this.upEnabled = true;
      }
  }

  handleLand(rocketImage) {
    window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.message = 'The shuttle has landed.'
    this.takeOffEnabled = true;
    rocketImage.style.bottom = 0;
    rocketImage.style.left = 0;
  }

  handleAbort(rocketImage) {
    window.alert('Are you sure you want to abort mission?');
    this.color = 'red';
    this.height = 0;
    this.message = 'Mission aborted.'
    this.takeOffEnabled = true;
    rocketImage.style.bottom = 0;
    rocketImage.style.left = 0;
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }
    
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }

    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }

    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
    this.gutterCheck(this.width, this.height)
  }
}
