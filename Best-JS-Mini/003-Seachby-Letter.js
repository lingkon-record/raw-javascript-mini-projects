 const cities = {
  A: ["Amsterdam", "Athens", "Atlanta"],
  B: ["Berlin", "Beijing", "Bangkok", "Barcelona"],
  C: ["Cairo", "Cape Town", "Chicago"],
  D: ["Dubai", "Delhi"],
  F: ["Florence"],
  H: ["Hong Kong"],
  I: ["Istanbul"],
  L: ["London", "Los Angeles"],
  M: ["Moscow", "Madrid"],
  N: ["New York", "Nairobi"],
  P: ["Paris"],
  R: ["Rome"],
  S: ["Sydney", "Shanghai"],
  T: ["Tokyo", "Toronto"],
  V: ["Venice"],
};

for (const letter in cities) {
  console.log(`Cities starting with ${letter}: ${cities[letter].join(", ")}`);
}
