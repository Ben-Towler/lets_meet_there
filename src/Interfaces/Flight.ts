import {FlightLeg} from './FlightLeg';

export interface Flight {
  QuoteId: number;
  MinPrice: number;
  Direct: Boolean,
  OutboundLeg: FlightLeg,
  InboundLeg: FlightLeg,
  QuoteDateTime: string,
}



