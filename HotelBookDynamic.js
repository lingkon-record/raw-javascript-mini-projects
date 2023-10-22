// Simulated hotel data for 12 cities, one for each month
const cityHotels = [
  {
    cityName: 'Beachside Paradise',
    month: 'January',
    hotels: [
      {
        name: 'Sunset Resort',
        price: '$150 per night',
        amenities: 'Beachfront, pool, spa',
      },
      // Add more hotels for January in Beachside Paradise
    ],
  },
  {
    cityName: 'Dhaka_rental 5 star',
    month: 'October',
    hotels: [
      {
        name: 'uttora_Mountain Lodge',
        price: '$120 per night',
        amenities: 'sky, moon,Scenic views, hiking trails',
      },
      // Add more hotels for February in Mountain Retreat
    ],
    // Add more cities and months with their respective hotels
    // ...
  },
  {
    cityName: 'Historic City',
    month: 'December',
    hotels: [
      {
        name: 'Grand Heritage Hotel',
        price: '$180 per night',
        amenities: 'Historical charm, city center',
      },
      // Add more hotels for December in Historic City
    ],
  },
];

// Function to list hotels in a city for a specific month
function listCityHotels(cityName, month) {
  const cityData = cityHotels.find(
    (data) => data.cityName === cityName && data.month === month
  );

  if (cityData) {
    return cityData.hotels;
  }

  return null; // Return null when there's no match
}

// Function to get the current month name
function getCurrentMonthName() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentDate = new Date();
  return months[currentDate.getMonth()];
}

// Automatically get the current month and display hotel information for all cities
const currentMonth = getCurrentMonthName();

cityHotels.forEach((cityData) => {
  const selectedCity = cityData.cityName;
  const hotelList = listCityHotels(selectedCity, currentMonth);

  if (hotelList) {
    console.log(`Hotels in ${selectedCity} for ${currentMonth}:`);
    hotelList.forEach((hotel) => {
      console.log(`${hotel.name} - ${hotel.price} - ${hotel.amenities}`);
    });
  }
});
