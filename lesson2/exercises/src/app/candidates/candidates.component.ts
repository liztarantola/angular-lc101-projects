import { Component, OnInit } from '@angular/core';
import { Candidate} from '../models/candidate';
@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
   missionName = "LaunchCode Moonshot"

   candidates = [
    {name: 'Rusty Rutabaga', data: {age: 5, mass: '0.75 kg', sidekick: 'Blake'}, image: 'assets/images/Blake.png'},
    {name: 'Tessa Tortoise', data: {age: 126, mass: '113 kg', sidekick: 'Sally'}, image: 'assets/images/Sally.png'},
    {name: 'Bernie Beagle', data: {age: 4, mass: '15 kg', sidekick: 'Paul'}, image: 'assets/images/Paul.png'},
    {name: 'Jackalope', data: {age: 45, mass: '33 kg', sidekick: 'Chris'}, image: 'assets/images/Chris.png'},
    {name: 'Champ', data: {age: 9, mass: '36 kg', sidekick: 'Carly'}, image: 'assets/images/Carly.png'}
  ];

  crew = [];

  constructor() { }

  ngOnInit() {
  }

  // Code the addToCrew function here:

  addToCrew (candidate: Candidate) {
    console.log('hi we are in our function')
    if (!this.crew.includes(candidate)) {
      // (currentCrewmember) => currentCrewmember === candidate)) {
      this.crew.push(candidate);
    }
  }


  // BONUS: Code the changeMissionName function here:
changeMissionName(newName){
  this.missionName = newName
}

}
