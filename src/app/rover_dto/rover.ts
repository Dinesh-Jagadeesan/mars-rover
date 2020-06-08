import { Cameras } from './cameras';

export class Rover {

    id: number = 0;
    name: number = null;
    landing_date: string = null;
    launch_date: string = null;
    status: string = null;
    max_sol: number = 0;
    max_date: string = null;
    total_photos: number = 0;
    cameras: Cameras[] = null;
}