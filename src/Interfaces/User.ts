export interface Favourites {
  userRequest: {
    origin: string,
    destination: string,
    outboundDate: string,
    inboundDate: string
  },
  friendRequest: {
    origin: string,
    destination: string,
    outboundDate: string,
    inboundDate: string
  }
}

export interface User {
  displayName: string,
  id: string,
  email: string,
  createdAt: {nanoseconds: number, seconds: number},
  favourites: Favourites[];
}
