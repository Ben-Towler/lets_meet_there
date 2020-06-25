interface FavLeg {
  CarrierIds: number[]; 
  OriginId: number;
  DestinationId: number; 
  DepartureDate: string;
}


export interface FavFlight {
  Direct: Boolean;
  InboundLeg: FavLeg;
  MinPrice: number;
  OutboundLeg: FavLeg;
  QuoteDateTime: string;
  QuoteId: number;
}