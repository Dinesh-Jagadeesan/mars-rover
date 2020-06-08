import { Component, OnInit, Input } from '@angular/core';
import { Rover } from '../rover_dto/rover';

@Component({
  selector: 'app-rover-details',
  templateUrl: './rover-details.component.html',
  styleUrls: ['./rover-details.component.scss']
})
export class RoverDetailsComponent implements OnInit {

  @Input() roverDetails: Rover[] = null;
  roverColumns: string[] = null;

  constructor() { }

  ngOnInit(): void {

    this.roverColumns = ['id', 'name', 'launch_date', 'landing_date', 'status', 'max_sol', 'max_date', 'total_photos'];
  }

}
