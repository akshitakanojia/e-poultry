export const removeAdress = (addresses, id) => {
  return addresses.filter(address => address.id !== id)
}

export const updateModifiedAddress = (addresses, updatedAddress) => {
  return addresses.map(address => 
    address.id === updatedAddress.id ?
      {
        ...address,
        address_1: updatedAddress.address_1,
        address_2: updatedAddress.address_2,
        city: updatedAddress.city,
        country: updatedAddress.country,
        created: updatedAddress.created,
        landmark: updatedAddress.landmark,
        pin_code: updatedAddress.pin_code,
        state: updatedAddress.state,
        updated: updatedAddress.updated
      }
      : address
  )
}

// address_1: "56 - Tilak Nagar"
// address_2: ""
// city: "Indore"
// country: "IN"
// created: "2020-11-09T13:52:09.155088+05:30"
// id: 1
// landmark: "near Hanuman mandir"
// pin_code: "452016"
// state: "MP"
// updated: "2020-11-26T17:22:12.366330+05:30"

