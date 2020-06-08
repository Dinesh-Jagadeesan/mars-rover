import { Component, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { MarsRover } from './mars-rover';
import { AppService } from './app.service';
import { HttpParams } from '@angular/common/http';
import { RoverData } from './rover_dto/rover-data';
import { Rover } from './rover_dto/rover';
import { Cameras } from './rover_dto/cameras';
import { Photos } from './rover_dto/photos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  marsRover: MarsRover = null;
  rovers: any[] = null;
  currentDate: Date = null;
  roverData: RoverData = null;
  roverDetails: Rover[] = null;
  roverCameras: Cameras[] = null;
  roverPhotos: Photos[] = null;
  mode: string = null;
  serverError: any = null;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.marsRover = new MarsRover();
    this.marsRover.apiKey = "DEMO_KEY";
    this.loadRover();
  }
  loadRover() {
    this.appService.loadRover()
      .subscribe(rovers => {
        this.rovers = rovers;
        this.marsRover.rover = this.rovers[0].value;
      });

  }

  onSubmit(): void {
    this.mode = "indeterminate";
    let baseUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/"
      + this.marsRover.rover + "/photos";

    let queryParams: HttpParams = new HttpParams();
    if (this.marsRover.sol != null && this.marsRover.earthDate == null) {
      queryParams = queryParams.append("sol", this.marsRover.sol.toString());
    } else {
      queryParams = queryParams.append("earth_date", this.formatEarthDate());
    }
    if (this.marsRover.apiKey != null) {
      queryParams = queryParams.append("api_key", this.marsRover.apiKey);
    }
    this.appService.onSubmit(baseUrl, queryParams)
      .subscribe(roverData => {
        this.mode = "determinate";
        this.serverError = null;
        this.roverData = roverData;
        if (roverData.photos.length != 0) {
          this.roverDetails = new Array<Rover>();
          this.roverDetails.push(this.roverData.photos[0].rover);
          this.roverCameras = this.roverData.photos[0].rover.cameras;
          this.roverPhotos = this.roverData.photos;
        }
      }, 
      error => {
        this.mode = "determinate";
        this.serverError = error;
      });
  }

  formatEarthDate(): string {
    if (this.marsRover.earthDate != null) {
      let date = new Date(this.marsRover.earthDate);
      date.setMonth(date.getMonth() + 1);
      return date.getFullYear().toString() + "-" + date.getMonth().toString() + "-" + date.getDate().toString();
    }
  }
}
