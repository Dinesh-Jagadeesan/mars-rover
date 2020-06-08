import { Camera } from './camera';
import { Rover } from './rover';

export class Photos {
    
    id: number = 0;
    sol: number = 0;
    camera: Camera = null;
    img_src: string = null;
    earth_date: string = null;
    rover: Rover = null;
}