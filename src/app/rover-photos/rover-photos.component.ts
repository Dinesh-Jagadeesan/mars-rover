import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Photos } from '../rover_dto/photos';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rover-photos',
  templateUrl: './rover-photos.component.html',
  styleUrls: ['./rover-photos.component.scss']
})
export class RoverPhotosComponent implements OnInit {

  @Input() roverPhotos: Photos[] = null;
  photoColumns: string[] = null;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource: MatTableDataSource<Photos> = null;

  constructor() { }

  ngOnInit(): void {
    this.photoColumns = ['id', 'sol', 'earth_date', 'camera_id', 'camera_name', 'img_src']
    this.dataSource = new MatTableDataSource<Photos>(this.roverPhotos);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource<Photos>(this.roverPhotos);
    this.dataSource.paginator = this.paginator;
  }
}
