import {Activity} from "./activity.model";
import {LocationName, Location} from "./map.model";

export class TourPackage {
  id: number = 0;
  img: string | null = null;
  destiny: string = '';
  title: string = '';
  description: string = '';
  agency: string = '';
  price: number = 0;
  stars: number = 0;
  regionId: number = 0;
  activities: Activity[] = [];
  visible: boolean = false;
  meetingPoint: Location | null = null;
  meetingPointLatitude: number | null = null;
  meetingPointLongitude: number | null = null;
  destinations: LocationName[] = [];
}
