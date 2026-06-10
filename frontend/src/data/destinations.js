const destinations = {
  paris: {
  city: 'Paris',
  country: 'France',
  image: '/images/destinations/paris.avif',
  price: '$542',

  rating: 5,
  reviewText: 'Perfect',
  reviewName: 'Emma L.',
  review:
    'Absolutely magical city with incredible food and atmosphere.',

  description:
    'The City of Light offers iconic landmarks, world-class museums, and unforgettable cuisine.',

  attractions: [
    'Eiffel Tower',
    'Louvre Museum',
    'Notre-Dame',
    'Arc de Triomphe',
  ],

  bestTime: 'April to June, September to October',
  currency: 'Euro (EUR)',
  language: 'French',
},

rome: {
  city: 'Rome',
  country: 'Italy',
  image: '/images/destinations/rome.avif',
  price: '$628',

  rating: 4.7,
  reviewText: 'Amazing',
  reviewName: 'Marco T.',
  review:
    'Ancient history everywhere you look. Truly unforgettable.',

  description:
    'Discover ancient history, stunning architecture, and authentic Italian culture in the Eternal City.',

  attractions: [
    'Colosseum',
    'Roman Forum',
    'Trevi Fountain',
    'Vatican City',
  ],

  bestTime: 'April to June, September to October',
  currency: 'Euro (EUR)',
  language: 'Italian',
},

london: {
  city: 'London',
  country: 'United Kingdom',
  image: '/images/destinations/london.avif',
  price: '$542',

  rating: 4.8,
  reviewText: 'Excellent',
  reviewName: 'Oliver W.',
  review:
    'Fantastic city with so much to see and do!',

  description:
    'Experience royal heritage, vibrant culture, and world-renowned attractions in the British capital.',

  attractions: [
    'Big Ben',
    'British Museum',
    'London Eye',
    'Tower of London',
  ],

  bestTime: 'March to May, September to November',
  currency: 'British Pound (GBP)',
  language: 'English',
},

barcelona: {
  city: 'Barcelona',
  country: 'Spain',
  image: '/images/destinations/barcelona.avif',
  price: '$485',

  rating: 4.6,
  reviewText: 'Wonderful',
  reviewName: 'Sofia M.',
  review:
    'Beautiful beaches and stunning architecture.',

  description:
    'Enjoy sunny beaches, Gaudí masterpieces, and vibrant Mediterranean atmosphere.',

  attractions: [
    'Sagrada Familia',
    'Park Güell',
    'La Rambla',
    'Casa Batlló',
  ],

  bestTime: 'May to June, September to October',
  currency: 'Euro (EUR)',
  language: 'Spanish, Catalan',
},

dubai: {
  city: 'Dubai',
  country: 'United Arab Emirates',
  image: '/images/destinations/dubai.avif',
  price: '$712',

  rating: 4.9,
  reviewText: 'Luxury Experience',
  reviewName: 'Ali K.',
  review:
    'Modern, luxurious, and full of amazing attractions.',

  description:
    'Explore luxury shopping, ultramodern architecture, and endless entertainment options.',

  attractions: [
    'Burj Khalifa',
    'Dubai Mall',
    'Palm Jumeirah',
    'Dubai Marina',
  ],

  bestTime: 'November to March',
  currency: 'UAE Dirham (AED)',
  language: 'Arabic, English',
},

milan: {
  city: 'Milan',
  country: 'Italy',
  image: '/images/destinations/milan.avif',
  price: '$628',

  rating: 4.4,
  reviewText: 'Very Good',
  reviewName: 'Giulia R.',
  review:
    'Perfect for shopping, fashion, and elegant city walks.',

  description:
    'The fashion capital offers exquisite design, historic landmarks, and Italian elegance.',

  attractions: [
    'Duomo di Milano',
    'Galleria Vittorio Emanuele II',
    'La Scala',
    'Sforza Castle',
  ],

  bestTime: 'April to June, September to October',
  currency: 'Euro (EUR)',
  language: 'Italian',
},

newyork: {
  city: 'New York',
  country: 'United States',
  image: '/images/destinations/newyork.avif',
  price: '$389',

  rating: 5,
  reviewText: 'Iconic',
  reviewName: 'Michael B.',
  review:
    'The energy of New York is unmatched.',

  description:
    'The city that never sleeps offers iconic skylines, diverse culture, and endless opportunities.',

  attractions: [
    'Statue of Liberty',
    'Central Park',
    'Times Square',
    'Brooklyn Bridge',
  ],

  bestTime: 'April to June, September to November',
  currency: 'US Dollar (USD)',
  language: 'English',
},

budapest: {
  city: 'Budapest',
  country: 'Hungary',
  image: '/images/destinations/budapest.jpg',
  price: '$456',

  rating: 4.7,
  reviewText: 'Amazing',
  reviewName: 'Anna F.',
  review:
    'Beautiful architecture and relaxing thermal baths.',

  description:
    'Discover thermal baths, stunning architecture, and rich history along the Danube River.',

  attractions: [
    'Buda Castle',
    'Parliament Building',
    'Chain Bridge',
    'Széchenyi Baths',
  ],

  bestTime: 'March to May, September to November',
  currency: 'Hungarian Forint (HUF)',
  language: 'Hungarian',
},

tokyo: {
  city: 'Tokyo',
  country: 'Japan',
  image: '/images/destinations/tokyo.avif',
  price: '$895',

  rating: 4.9,
  reviewText: 'Outstanding',
  reviewName: 'Yuki S.',
  review:
    'Incredibly clean, modern, and exciting city.',

  description:
    'Experience the perfect blend of traditional culture and cutting-edge technology.',

  attractions: [
    'Tokyo Tower',
    'Shibuya Crossing',
    'Senso-ji Temple',
    'Meiji Shrine',
  ],

  bestTime: 'March to May, October to November',
  currency: 'Japanese Yen (JPY)',
  language: 'Japanese',
},

amsterdam: {
  city: 'Amsterdam',
  country: 'Netherlands',
  image: '/images/destinations/amsterdam.avif',
  price: '$512',

  rating: 4.5,
  reviewText: 'Lovely',
  reviewName: 'Lucas V.',
  review:
    'The canals and museums were absolutely beautiful.',

  description:
    'Charming canals, world-class museums, and vibrant cultural scene await.',

  attractions: [
    'Rijksmuseum',
    'Van Gogh Museum',
    'Anne Frank House',
    'Canal Ring',
  ],

  bestTime: 'April to May, September to November',
  currency: 'Euro (EUR)',
  language: 'Dutch',
},

singapore: {
  city: 'Singapore',
  country: 'Singapore',
  image: '/images/destinations/singapore.avif',
  price: '$782',

  rating: 4.8,
  reviewText: 'Modern Paradise',
  reviewName: 'Daniel C.',
  review:
    'Very futuristic city with amazing food and attractions.',

  description:
    'A futuristic garden city with diverse cultures, amazing food, and modern marvels.',

  attractions: [
    'Gardens by the Bay',
    'Marina Bay Sands',
    'Sentosa Island',
    'Merlion Park',
  ],

  bestTime: 'February to April',
  currency: 'Singapore Dollar (SGD)',
  language: 'English, Malay, Mandarin, Tamil',
},

istanbul: {
  city: 'Istanbul',
  country: 'Turkey',
  image: '/images/destinations/istanbul.avif',
  price: '$495',

  rating: 4.7,
  reviewText: 'Excellent',
  reviewName: 'Ahmet D.',
  review:
    'Amazing mix of history, culture, and delicious food.',

  description:
    'Where East meets West with breathtaking architecture and rich traditions.',

  attractions: [
    'Hagia Sophia',
    'Blue Mosque',
    'Grand Bazaar',
    'Topkapi Palace',
  ],

  bestTime: 'April to May, September to November',
  currency: 'Turkish Lira (TRY)',
  language: 'Turkish',
},

sydney: {
  city: 'Sydney',
  country: 'Australia',
  image: '/images/destinations/sydney.avif',
  price: '$1142',

  rating: 4.9,
  reviewText: 'Outstanding',
  reviewName: 'Emily R.',
  review:
    'Beautiful beaches and incredible city atmosphere.',

  description:
    "Iconic harbor, beautiful beaches, and vibrant urban life in Australia's largest city.",

  attractions: [
    'Sydney Opera House',
    'Harbour Bridge',
    'Bondi Beach',
    'Darling Harbour',
  ],

  bestTime: 'September to November, March to May',
  currency: 'Australian Dollar (AUD)',
  language: 'English',
},

prague: {
  city: 'Prague',
  country: 'Czech Republic',
  image: '/images/destinations/prague.avif',
  price: '$425',

  rating: 4.8,
  reviewText: 'Beautiful',
  reviewName: 'Jakub N.',
  review:
    'A fairy-tale city with amazing architecture.',

  description:
    'Medieval charm meets modern culture in this fairy-tale European capital.',

  attractions: [
    'Charles Bridge',
    'Prague Castle',
    'Old Town Square',
    'Astronomical Clock',
  ],

  bestTime: 'May to June, September',
  currency: 'Czech Koruna (CZK)',
  language: 'Czech',
},

vienna: {
  city: 'Vienna',
  country: 'Austria',
  image: '/images/destinations/vienna.avif',
  price: '$538',

  rating: 4.7,
  reviewText: 'Elegant',
  reviewName: 'Lena H.',
  review:
    'Beautiful palaces and amazing classical music scene.',

  description:
    'Imperial palaces, classical music heritage, and elegant coffee culture.',

  attractions: [
    'Schönbrunn Palace',
    'Belvedere Palace',
    'St. Stephen’s Cathedral',
    'Vienna State Opera',
  ],

  bestTime: 'April to June, September to October',
  currency: 'Euro (EUR)',
  language: 'German',
},

athens: {
  city: 'Athens',
  country: 'Greece',
  image: '/images/destinations/athens.avif',
  price: '$498',

  rating: 4.8,
  reviewText: 'Excellent',
  reviewName: 'Nikos P.',
  review:
    'Ancient ruins and Mediterranean atmosphere were unforgettable.',

  description:
    'Cradle of Western civilization with ancient ruins and Mediterranean charm.',

  attractions: [
    'Acropolis',
    'Parthenon',
    'Plaka District',
    'Temple of Olympian Zeus',
  ],

  bestTime: 'March to May, September to November',
  currency: 'Euro (EUR)',
  language: 'Greek',
},

lisbon: {
  city: 'Lisbon',
  country: 'Portugal',
  image: '/images/destinations/lisbon.avif',
  price: '$465',

  rating: 4.6,
  reviewText: 'Wonderful',
  reviewName: 'Sofia C.',
  review:
    'Amazing coastal views and colorful streets.',

  description:
    'Colorful hills, historic trams, and stunning coastal views.',

  attractions: [
    'Belém Tower',
    'Alfama District',
    'Jerónimos Monastery',
    'Praça do Comércio',
  ],

  bestTime: 'March to May, September to October',
  currency: 'Euro (EUR)',
  language: 'Portuguese',
},

berlin: {
  city: 'Berlin',
  country: 'Germany',
  image: '/images/destinations/berlin.avif',
  price: '$485',

  rating: 4.7,
  reviewText: 'Modern',
  reviewName: 'Felix T.',
  review:
    'Very energetic city with incredible history and nightlife.',

  description:
    'Dynamic capital with rich history, vibrant arts scene, and modern culture.',

  attractions: [
    'Brandenburg Gate',
    'Berlin Wall Memorial',
    'Museum Island',
    'Reichstag Building',
  ],

  bestTime: 'May to September',
  currency: 'Euro (EUR)',
  language: 'German',
},

bangkok: {
  city: 'Bangkok',
  country: 'Thailand',
  image: '/images/destinations/bangkok.avif',
  price: '$645',

  rating: 4.8,
  reviewText: 'Exciting',
  reviewName: 'Maya K.',
  review:
    'Street food and temples were absolutely incredible.',

  description:
    'Bustling metropolis with ornate temples, street food, and vibrant markets.',

  attractions: [
    'Grand Palace',
    'Wat Arun',
    'Floating Markets',
    'Chatuchak Market',
  ],

  bestTime: 'November to February',
  currency: 'Thai Baht (THB)',
  language: 'Thai',
},

venice: {
  city: 'Venice',
  country: 'Italy',
  image: '/images/destinations/venice.avif',
  price: '$592',

  rating: 4.9,
  reviewText: 'Romantic',
  reviewName: 'Elena V.',
  review:
    'The canals and atmosphere felt magical.',

  description:
    'Romantic canals, stunning architecture, and timeless Italian beauty.',

  attractions: [
    'Grand Canal',
    'St. Mark’s Basilica',
    'Rialto Bridge',
    'Doge’s Palace',
  ],

  bestTime: 'April to June, September',
  currency: 'Euro (EUR)',
  language: 'Italian',
},

hongkong: {
  city: 'Hong Kong',
  country: 'China',
  image: '/images/destinations/hongkong.avif',
  price: '$825',

  rating: 4.8,
  reviewText: 'Amazing Skyline',
  reviewName: 'Jason L.',
  review:
    'Perfect blend of modern skyscrapers and tradition.',

  description:
    'Gleaming skyscrapers, bustling harbors, and a unique blend of East and West.',

  attractions: [
    'Victoria Peak',
    'Hong Kong Disneyland',
    'Star Ferry',
    'Temple Street Market',
  ],

  bestTime: 'October to December',
  currency: 'Hong Kong Dollar (HKD)',
  language: 'Chinese, English',
},

stockholm: {
  city: 'Stockholm',
  country: 'Sweden',
  image: '/images/destinations/stockholm.avif',
  price: '$598',

  rating: 4.7,
  reviewText: 'Scenic',
  reviewName: 'Erik S.',
  review:
    'Beautiful islands and clean Scandinavian style.',

  description:
    'Scandinavian elegance spread across islands with rich cultural heritage.',

  attractions: [
    'Gamla Stan',
    'Vasa Museum',
    'Skansen',
    'Royal Palace',
  ],

  bestTime: 'May to September',
  currency: 'Swedish Krona (SEK)',
  language: 'Swedish',
},

copenhagen: {
  city: 'Copenhagen',
  country: 'Denmark',
  image: '/images/destinations/copenhagen.avif',
  price: '$565',

  rating: 4.8,
  reviewText: 'Charming',
  reviewName: 'Freja N.',
  review:
    'Colorful streets, canals, and amazing Scandinavian atmosphere.',

  description:
    'Hygge capital with charming canals, colorful houses, and innovative design.',

  attractions: [
    'Nyhavn',
    'Tivoli Gardens',
    'Little Mermaid',
    'Christiansborg Palace',
  ],

  bestTime: 'May to September',
  currency: 'Danish Krone (DKK)',
  language: 'Danish',
},

dublin: {
  city: 'Dublin',
  country: 'Ireland',
  image: '/images/destinations/dublin.avif',
  price: '$495',

  rating: 4.7,
  reviewText: 'Friendly',
  reviewName: 'Connor M.',
  review:
    'The pubs, music, and people were unforgettable.',

  description:
    'Literary heritage, lively pubs, and warm Irish hospitality.',

  attractions: [
    'Trinity College',
    'Guinness Storehouse',
    'Dublin Castle',
    'Temple Bar',
  ],

  bestTime: 'May to September',
  currency: 'Euro (EUR)',
  language: 'English, Irish',
},

edinburgh: {
  city: 'Edinburgh',
  country: 'Scotland',
  image: '/images/destinations/edinburgh.avif',
  price: '$518',

  rating: 4.8,
  reviewText: 'Historic',
  reviewName: 'Isla R.',
  review:
    'Beautiful medieval streets and incredible castle views.',

  description:
    "Medieval old town, dramatic castle, and Scotland's cultural heart.",

  attractions: [
    'Edinburgh Castle',
    'Royal Mile',
    'Arthur’s Seat',
    'Holyrood Palace',
  ],

  bestTime: 'May to September',
  currency: 'British Pound (GBP)',
  language: 'English',
},

reykjavik: {
  city: 'Reykjavik',
  country: 'Iceland',
  image: '/images/destinations/reykjavik.avif',
  price: '$685',

  rating: 4.9,
  reviewText: 'Unique',
  reviewName: 'Bjorn K.',
  review:
    'Northern lights and Icelandic nature were breathtaking.',

  description:
    'Gateway to Iceland’s natural wonders with vibrant culture and northern lights.',

  attractions: [
    'Hallgrímskirkja',
    'Blue Lagoon',
    'Harpa Concert Hall',
    'Golden Circle',
  ],

  bestTime: 'June to August, November to March',
  currency: 'Icelandic Krona (ISK)',
  language: 'Icelandic',
},

oslo: {
  city: 'Oslo',
  country: 'Norway',
  image: '/images/destinations/oslo.avif',
  price: '$625',

  rating: 4.7,
  reviewText: 'Peaceful',
  reviewName: 'Lars H.',
  review:
    'Beautiful fjords and modern Scandinavian lifestyle.',

  description:
    'Modern Scandinavian capital surrounded by fjords and forests.',

  attractions: [
    'Oslo Opera House',
    'Vigeland Park',
    'Akershus Fortress',
    'MUNCH Museum',
  ],

  bestTime: 'May to September',
  currency: 'Norwegian Krone (NOK)',
  language: 'Norwegian',
},

helsinki: {
  city: 'Helsinki',
  country: 'Finland',
  image: '/images/destinations/helsinki.avif',
  price: '$592',

  rating: 4.6,
  reviewText: 'Modern Nordic',
  reviewName: 'Ella V.',
  review:
    'Clean, modern, and full of beautiful seaside views.',

  description:
    'Design capital with Nordic charm and modern architecture.',

  attractions: [
    'Helsinki Cathedral',
    'Suomenlinna Fortress',
    'Market Square',
    'Temppeliaukio Church',
  ],

  bestTime: 'June to August',
  currency: 'Euro (EUR)',
  language: 'Finnish, Swedish',
},

brussels: {
  city: 'Brussels',
  country: 'Belgium',
  image: '/images/destinations/brussels.avif',
  price: '$475',

  rating: 4.6,
  reviewText: 'Delicious',
  reviewName: 'Louis D.',
  review:
    'Amazing chocolate, waffles, and historic squares.',

  description:
    'European capital with grand architecture, chocolate, and Belgian waffles.',

  attractions: [
    'Grand Place',
    'Atomium',
    'Manneken Pis',
    'Royal Palace',
  ],

  bestTime: 'April to October',
  currency: 'Euro (EUR)',
  language: 'French, Dutch, German',
},

zurich: {
  city: 'Zurich',
  country: 'Switzerland',
  image: '/images/destinations/zurich.avif',
  price: '$728',

  rating: 4.8,
  reviewText: 'Luxury',
  reviewName: 'Noah S.',
  review:
    'Beautiful lake views and perfect Swiss atmosphere.',

  description:
    'Alpine elegance with pristine lakes, luxury shopping, and Swiss precision.',

  attractions: [
    'Lake Zurich',
    'Bahnhofstrasse',
    'Old Town',
    'Swiss National Museum',
  ],

  bestTime: 'June to September, December',
  currency: 'Swiss Franc (CHF)',
  language: 'German',
},

madrid: {
  city: 'Madrid',
  country: 'Spain',
  image: '/images/destinations/madrid.avif',
  price: '$495',

  rating: 4.7,
  reviewText: 'Vibrant',
  reviewName: 'Carlos M.',
  review:
    'Fantastic nightlife, food, and beautiful plazas.',

  description:
    'Spain’s vibrant capital with world-class art museums and lively plazas.',

  attractions: [
    'Prado Museum',
    'Royal Palace',
    'Retiro Park',
    'Puerta del Sol',
  ],

  bestTime: 'March to May, September to November',
  currency: 'Euro (EUR)',
  language: 'Spanish',
},

sanfrancisco: {
  city: 'San Francisco',
  country: 'United States',
  image: '/images/destinations/sanfrancisco.avif',
  price: '$425',

  rating: 4.8,
  reviewText: 'Iconic',
  reviewName: 'Sarah T.',
  review:
    'Amazing views, diverse culture, and famous landmarks.',

  description:
    'Iconic Golden Gate Bridge, tech innovation hub, and diverse neighborhoods.',

  attractions: [
    'Golden Gate Bridge',
    'Alcatraz Island',
    'Fisherman’s Wharf',
    'Lombard Street',
  ],

  bestTime: 'September to November',
  currency: 'US Dollar (USD)',
  language: 'English',
},
  }

  export default destinations