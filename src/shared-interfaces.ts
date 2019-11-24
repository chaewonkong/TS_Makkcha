// Search params for makkcha
export interface ISearchMakkchaParam {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  curfewHour: number | null;
  curfewMin: number | null
}

// Interface for search subway res
export interface ISubway {
  type: string;
  longName: string | null;
  transferNum: number;
  totalTime: number;
  lastTime: string;
  remain: number;
  operationType: string;
  stepList: ISubwayStep[]
}

// Interface for each steps
export interface ISubwayStep {
  type: string,
  from: string | null;
  to: string | null;
  fromPoint: number[] | null;
  toPoint: number[] | null;
  duration: number;
  iconColor: string;
  iconName: string | null;
  headsign: string | null;
  door: string | null;
  name: string | null;
  operationType: string | null;
  departureTime: string | null;
  nextStation: string | null;
  points: IXYPoints[]
  options: string | null;

}

// Interface for x,y coords
export interface IXYPoints {
  x: number;
  y: number;
}

/*

*/