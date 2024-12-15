export const baseUrl =
  "https://b2b-backend-staging-627151212374.asia-east1.run.app/v1";

export const bookings = [
  {
    airline: "Turkish Airline",
    flightType: "Outbound",
    from: { city: "LHE", date: "Oct 06", time: "04:30 PM" },
    to: { city: "RUH", date: "Oct 06", time: "09:30 PM" },
    isDirect: true,
    baggage: "07 KGs",
    checkInBags: "20 KGs (1 Piece)",
    meal: "Included",
    price: "88,000/- PKR",
  },
  {
    airline: "Qatar Airways",
    flightType: "Inbound",
    from: { city: "DOH", date: "Oct 10", time: "03:15 PM" },
    to: { city: "LHE", date: "Oct 10", time: "08:25 PM" },
    isDirect: false,
    baggage: "10 KGs",
    checkInBags: "25 KGs (2 Pieces)",
    meal: "Included",
    price: "120,000/- PKR",
  },
  {
    airline: "Emirates",
    flightType: "Outbound",
    from: { city: "LHE", date: "Nov 01", time: "06:00 AM" },
    to: { city: "DXB", date: "Nov 01", time: "11:00 AM" },
    isDirect: true,
    baggage: "15 KGs",
    checkInBags: "30 KGs (2 Pieces)",
    meal: "Not Included",
    price: "150,000/- PKR",
  },
  {
    airline: "Etihad Airways",
    flightType: "Inbound",
    from: { city: "AUH", date: "Dec 05", time: "09:30 PM" },
    to: { city: "ISB", date: "Dec 06", time: "03:30 AM" },
    isDirect: true,
    baggage: "10 KGs",
    checkInBags: "20 KGs (1 Piece)",
    meal: "Included",
    price: "110,000/- PKR",
  },
  {
    airline: "Saudi Airlines",
    flightType: "Outbound",
    from: { city: "KHI", date: "Oct 20", time: "01:00 PM" },
    to: { city: "JED", date: "Oct 20", time: "05:45 PM" },
    isDirect: false,
    baggage: "07 KGs",
    checkInBags: "20 KGs (1 Piece)",
    meal: "Not Included",
    price: "90,000/- PKR",
  },
  {
    airline: "FlyDubai",
    flightType: "Inbound",
    from: { city: "DXB", date: "Nov 15", time: "08:15 AM" },
    to: { city: "LHE", date: "Nov 15", time: "01:10 PM" },
    isDirect: true,
    baggage: "05 KGs",
    checkInBags: "15 KGs (1 Piece)",
    meal: "Included",
    price: "75,000/- PKR",
  },
  {
    airline: "British Airways",
    flightType: "Outbound",
    from: { city: "ISB", date: "Dec 22", time: "11:30 PM" },
    to: { city: "LHR", date: "Dec 23", time: "06:00 AM" },
    isDirect: false,
    baggage: "12 KGs",
    checkInBags: "23 KGs (2 Pieces)",
    meal: "Included",
    price: "250,000/- PKR",
  },
  {
    airline: "Air Arabia",
    flightType: "Outbound",
    from: { city: "KHI", date: "Jan 05", time: "05:45 PM" },
    to: { city: "SHJ", date: "Jan 05", time: "09:00 PM" },
    isDirect: true,
    baggage: "08 KGs",
    checkInBags: "20 KGs (1 Piece)",
    meal: "Not Included",
    price: "70,000/- PKR",
  },
];

export const reviews = [
  {
    name: "Zahid Ghafoor",
    reviewText:
      "The service was exceptional! From the first interaction to the final delivery, everything was managed professionally. Leo dolor ac auctor porta curabitur blandit. Fermentum fermentum lectus vitae eu. Highly recommended!",
  },
  {
    name: "Ali Ahmed",
    reviewText:
      "Amazing experience! The team was efficient and paid attention to every detail. Lorem ipsum dolor sit amet consectetur. Tortor eget nascetur lobortis feugiat. I’m thoroughly impressed with their work.",
  },
  {
    name: "Ayesha Khan",
    reviewText:
      "Great customer support and seamless service. Lorem ipsum dolor sit amet consectetur. Fermentum fermentum lectus vitae eu. My experience was stress-free, and I couldn’t ask for more!",
  },
  {
    name: "Fatima Noor",
    reviewText:
      "Affordable prices combined with excellent service make them a standout. Lorem ipsum dolor sit amet consectetur. Fermentum fermentum lectus vitae eu. I would definitely use their service again.",
  },
  {
    name: "Bilal Hussain",
    reviewText:
      "Good service overall, although the delivery was slightly delayed. Lorem ipsum dolor sit amet consectetur. Sagittis fermentum mauris et magna sed. Their customer care made up for it.",
  },
  {
    name: "Sara Malik",
    reviewText:
      "Exceptional team with a focus on customer satisfaction! Tortor eget nascetur lobortis feugiat. Fermentum fermentum lectus vitae eu. My expectations were exceeded at every step.",
  },
  {
    name: "Hamza Tariq",
    reviewText:
      "Efficient, reliable, and professional service. Lorem ipsum dolor sit amet consectetur. Fermentum fermentum lectus vitae eu. I’ll definitely recommend them to friends and family!",
  },
  {
    name: "Mehwish Iqbal",
    reviewText:
      "Their dedication and attention to detail were amazing. Lorem ipsum dolor sit amet consectetur. Sagittis fermentum mauris et magna sed. A truly great experience from start to finish!",
  },
  {
    name: "Ahmed Raza",
    reviewText:
      "Everything was handled flawlessly. Lorem ipsum dolor sit amet consectetur. Leo dolor ac auctor porta curabitur blandit. Tortor eget nascetur lobortis feugiat. I’ll definitely return for future services.",
  },
  {
    name: "Nida Aslam",
    reviewText:
      "Superb service with prompt communication. Lorem ipsum dolor sit amet consectetur. Fermentum fermentum lectus vitae eu. They made everything so convenient and stress-free for me.",
  },
];

export const countries = [
  "New Zealand",
  "Thailand",
  "Indonesia",
  "Singapore",
  "United Kingdom",
  "Saudi Arabia",
  "Vietnam",
  "Cambodia",
  "Nepal",
  "Azerbaijan",
  "Bahrain",
  "USA",
];

export const companyInfoStats = [
  { number: "03", label: "Offices" },
  { number: "50+", label: "Staff" },
  { number: "10+", label: "Years" },
  { number: "4.5", label: "Star Rating" },
];

export const navbarLinks = [
  {
    name: "Group Flights",
    url: "/group-flight",
  },
  {
    name: "Visa",
    url: "/visas",
  },
  {
    name: "Umrah",
    url: "/umrah",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Tracking",
    url: "/tracking",
  },
];

export const airports = [
  { label: "Allama Iqbal International Airport", value: "LHE" },
  { label: "Benazir Bhutto International Airport", value: "ISB" },
  { label: "Muscat International Airport", value: "MCT" },
  { label: "Jinnah International Airport", value: "KHI" },
  { label: "Peshawar Bacha Khan International Airport", value: "PEW" },
  { label: "Multan International Airport", value: "MUX" },
  { label: "Quetta International Airport", value: "UET" },
  { label: "Faisalabad International Airport", value: "LHE" },
  { label: "Sialkot International Airport", value: "SKT" },
  { label: "Skardu Airport", value: "KDU" },
  { label: "Gwadar International Airport", value: "GWD" },
  { label: "Rahim Yar Khan International Airport", value: "RYK" },
  { label: "Lahore Walton Airport", value: "LHE" },
  { label: "King Abdulaziz International Airport", value: "JED" }, // Jeddah
  { label: "King Khalid International Airport", value: "RUH" }, // Riyadh
  {
    label: "Prince Mohammed Bin Abdulaziz International Airport",
    value: "MED",
  }, // Madinah
  { label: "King Fahd International Airport", value: "DMM" }, // Dammam
  { label: "Prince Sultan bin Abdulaziz International Airport", value: "TUU" }, // Tabuk
  { label: "Abha International Airport", value: "AHB" }, // Abha
  { label: "Prince Nayef bin Abdulaziz International Airport", value: "ELQ" }, // Qassim
  { label: "Jouf Domestic Airport", value: "AJF" }, // Al-Jouf
  { label: "Hail Regional Airport", value: "HAS" }, // Hail
  { label: "Ta'if Regional Airport", value: "TIF" }, // Ta'if
  { label: "Najran Domestic Airport", value: "EAM" }, // Najran
  { label: "Al-Qaisumah/Hafr Al-Batin Airport", value: "AQI" },
  { label: "Dubai International Airport", value: "DXB" },
  { label: "Abu Dhabi International Airport", value: "AUH" },
  { label: "Sharjah International Airport", value: "SHJ" },
  { label: "Al Maktoum International Airport", value: "DWC" },
  { label: "Ras Al Khaimah International Airport", value: "RKT" },
  { label: "Fujairah International Airport", value: "FJR" },
  { label: "Al Ain International Airport", value: "AAN" },
  { label: "London Heathrow Airport", value: "LHR" },
  { label: "London Gatwick Airport", value: "LGW" },
  { label: "London Stansted Airport", value: "STN" },
  { label: "London Luton Airport", value: "LTN" },
  { label: "Manchester Airport", value: "MAN" },
  { label: "Edinburgh Airport", value: "EDI" },
  { label: "Birmingham Airport", value: "BHX" },
  { label: "Glasgow International Airport", value: "GLA" },
  { label: "Bristol Airport", value: "BRS" },
  { label: "Newcastle International Airport", value: "NCL" },
  { label: "Liverpool John Lennon Airport", value: "LPL" },
  { label: "Leeds Bradford Airport", value: "LBA" },
  { label: "Southampton Airport", value: "SOU" },
  { label: "Aberdeen International Airport", value: "ABZ" },
  { label: "Cardiff Airport", value: "CWL" },
  { label: "Nottingham East Midlands Airport", value: "EMA" },
];
