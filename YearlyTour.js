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
    cityName: 'Dhaka',
    month: 'February',
    hotels: [
      {
        name: 'Mountain Lodge',
        price: '$120 per night',
        amenities: 'Scenic views, hiking trails',
      },
      // Add more hotels for February in Mountain Retreat
    ],
  },
  // Add more cities and months with their respective hotels
  // ...

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

  return 'No hotel information available for this city and month.';
}

// Example usage:
const selectedCity = 'Dhaka';
const selectedMonth = 'February';

const hotelList = listCityHotels(selectedCity, selectedMonth);

if (Array.isArray(hotelList) && hotelList.length > 0) {
  hotelList.forEach((hotel) => {
    console.log(`${hotel.name} - ${hotel.price} - ${hotel.amenities}`);
  });
} else {
  console.log('No hotel information available for this city and month.');
  }
  
