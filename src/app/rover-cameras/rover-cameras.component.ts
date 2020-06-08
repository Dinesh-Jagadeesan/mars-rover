import { Component, OnInit, Input } from '@angular/core';
import { Cameras } from '../rover_dto/cameras';

@Component({
  selector: 'app-rover-cameras',
  templateUrl: './rover-cameras.component.html',
  styleUrls: ['./rover-cameras.component.scss']
})
export class RoverCamerasComponent implements OnInit {

  @Input() roverCameras: Cameras[] = null;
  cameraColumns: string[] = null;

  constructor() { }

  ngOnInit(): void {
    this.cameraColumns = ['name', 'full_name'];
  }

}
