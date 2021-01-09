export type HotelBasicInfo = {
  access: string
  address1: string
  address2: string
  dpPlanListUrl: string
  faxNo: string
  hotelImageUrl: string
  hotelInformationUrl: string
  hotelKanaName: null
  hotelMapImageUrl: string
  hotelMinCharge: number
  hotelName: string
  hotelNo: number
  hotelSpecial: string
  hotelThumbnailUrl: string
  latitude: number
  longitude: number
  nearestStation: string
  parkingInformation: string
  planListUrl: string
  postalCode: string
  reviewAverage: number | null
  reviewCount: number
  reviewUrl: string
  roomImageUrl: string | null
  roomThumbnailUrl: string | null
  telephoneNo: string
  userReview: string | null
}

export type HotelRatingInfo = {
  bathAverage: number | null
  equipmentAverage: number | null
  locationAverage: number | null
  mealAverage: number | null
  roomAverage: number | null
  serviceAverage: number | null
}

export type Hotel = [HotelBasicInfo, HotelRatingInfo]
export type Hotels = Array<Hotel>