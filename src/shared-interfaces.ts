// Search params for makkcha
export interface ISearchMakkchaParam {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  curfewHour?: number | null;
  curfewMin?: number | null
}

export interface ITransportations {
  bus: IBusAndSubway[],
  subway: IBusAndSubway[],
  busAndSubway: IBusAndSubway[],
  owlbus: IOwlBus[],
  taxi: ITaxi,
  ddarng: IDdarng[]
}

// Interface for search subway res
export interface IBusAndSubway {
  type: string;
  longName: string | null;
  transferNum: number;
  totalTime: number;
  lastTime: string;
  remain: number;
  operationType: string;
  stepList: IStep[]
}

export interface ITaxi {
  time: number;
  price: number;
  distance: number;
}

export interface IDdarng {
  pointX: number;
  pointY: number;
  id: number;
  location: string;
  stationId: string;
  totalCnt: number;
  curCnt: number;
  walkDuration: number;
}

export interface IOwlBus {
  type: "OWL_BUS";
  totalTime: number;
  timetable: string;
  stepList: IStep[];
  remain: number;
  price: number;
}

/*
        "type": "WALKING",
                "from": null,
                "to": null,
                "fromPoint": null,
                "toPoint": null,
                "duration": 0,
                "iconColor": "#707070",
                "iconName": null,
                "name": null,
                "operationType": null,
                "price": 0,
                "nextStation": null,
*/

// Interface for each steps
export interface IStep {
  type: string,
  from: string | null;
  to: string | null;
  fromPoint: number[] | null;
  toPoint: number[] | null;
  duration: number;
  iconColor: string;
  iconName: string | null;
  headsign?: string | null;
  door?: string | null;
  name: string | null;
  operationType: string | null;
  departureTime?: string | null;
  nextStation: string | null;
  points: IXYPoints[]
  price?: number;
}

// Interface for x,y coords
export interface IXYPoints {
  x: number;
  y: number;
}

/*

*/