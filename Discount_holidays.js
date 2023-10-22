function applyHolidayDiscount(price, holiday) {
  let discountPercentage = 0;

  switch (holiday) {
    case 'NewYear':
      discountPercentage = 10;
      break;
    case 'Christmas':
      discountPercentage = 15;
      break;
    case 'Thanksgiving':
      discountPercentage = 12;
      break;
    // Add more holidays and discount percentages as needed
    default:
      discountPercentage = 0;
  }

  const discountAmount = (price * discountPercentage) / 100;
  const discountedPrice = price - discountAmount;

  return discountedPrice;
}

// Example usage:
const originalPrice = 100;
const currentHoliday = 'Christmas';
const finalPrice = applyHolidayDiscount(originalPrice, currentHoliday);

console.log(`Original Price: $${originalPrice}`);
console.log(`Discounted Price on ${currentHoliday}: $${finalPrice}`);
  
