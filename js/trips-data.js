// PackSmart - Trip Scenarios Data

const tripsData = {
  miami: {
    id: 'miami',
    icon: '🏖️',
    title: 'Miami Beach Vacation',
    destination: 'Miami, Florida',
    dates: 'Dec 15-22, 2025',
    duration: '7 nights',
    weather: {
      temp: '75-85°F',
      condition: 'Sunny',
      precipitation: '20% chance of rain',
      icon: '☀️'
    },
    tripType: 'Beach / Leisure',
    accommodation: 'Hotel',
    
    // Sample user packing list with AI analysis
    userItems: [
      {
        id: 1,
        name: '5 changes of clothes',
        category: 'clothing',
        status: 'warning',
        aiMessage: 'Consider 3-4 for a week trip - hotel has laundry service',
        suggestion: '3 changes of clothes'
      },
      {
        id: 2,
        name: 'Passport',
        category: 'documents',
        status: 'good',
        aiMessage: 'Important! Required for your flight'
      },
      {
        id: 3,
        name: 'Bananas (1 month supply)',
        category: 'comfort',
        status: 'problem',
        aiMessage: 'Will spoil during travel - buy fresh at destination'
      },
      {
        id: 4,
        name: 'XL shampoo bottle',
        category: 'toiletries',
        status: 'warning',
        aiMessage: 'Over 3.4oz limit - must go in checked baggage'
      },
      {
        id: 5,
        name: 'Sun hat',
        category: 'clothing',
        status: 'good',
        aiMessage: 'Great choice for Miami sun protection'
      },
      {
        id: 6,
        name: 'Winter coat',
        category: 'clothing',
        status: 'problem',
        aiMessage: 'Miami forecast is 75-85°F - unnecessary weight'
      },
      {
        id: 7,
        name: 'Swimsuit',
        category: 'clothing',
        status: 'good',
        aiMessage: 'Perfect for beach destination'
      },
      {
        id: 8,
        name: 'Phone charger',
        category: 'electronics',
        status: 'good',
        aiMessage: 'Essential item - never forget this one'
      }
    ],
    
    // AI suggested additions
    suggestions: [
      {
        id: 101,
        name: 'Sunscreen SPF 30+',
        category: 'toiletries',
        status: 'suggestion',
        aiMessage: 'High UV index at destination - protect your skin'
      },
      {
        id: 102,
        name: 'Reef-safe sunscreen',
        category: 'toiletries',
        status: 'suggestion',
        aiMessage: 'Required at some Miami beaches to protect coral'
      },
      {
        id: 103,
        name: 'Light rain jacket',
        category: 'clothing',
        status: 'suggestion',
        aiMessage: '20% rain chance mid-week - pack something compact'
      },
      {
        id: 104,
        name: 'Sandals / flip-flops',
        category: 'clothing',
        status: 'suggestion',
        aiMessage: 'Essential for beach and pool areas'
      },
      {
        id: 105,
        name: 'Portable phone charger',
        category: 'electronics',
        status: 'suggestion',
        aiMessage: 'Long beach days away from outlets'
      }
    ]
  },
  
  colorado: {
    id: 'colorado',
    icon: '🏔️',
    title: 'Colorado Mountain Adventure',
    destination: 'Denver / Boulder, Colorado',
    dates: 'Jan 8-15, 2026',
    duration: '7 nights',
    weather: {
      temp: '25-40°F',
      condition: 'Snow likely',
      precipitation: '60% precipitation chance',
      icon: '🌨️'
    },
    tripType: 'Skiing / Hiking',
    accommodation: 'Cabin rental',
    
    userItems: [
      {
        id: 1,
        name: '3 t-shirts',
        category: 'clothing',
        status: 'warning',
        aiMessage: 'Pack thermal base layers instead - temps below freezing',
        suggestion: 'Thermal base layers'
      },
      {
        id: 2,
        name: 'Jeans (3 pairs)',
        category: 'clothing',
        status: 'warning',
        aiMessage: 'Cotton holds moisture when wet - consider 1 pair + snow pants'
      },
      {
        id: 3,
        name: 'Passport',
        category: 'documents',
        status: 'good',
        aiMessage: 'Important! Keep accessible for your flight'
      },
      {
        id: 4,
        name: 'Laptop',
        category: 'electronics',
        status: 'good',
        aiMessage: 'Note: Extreme cold can drain battery faster'
      },
      {
        id: 5,
        name: 'Sunglasses',
        category: 'clothing',
        status: 'good',
        aiMessage: 'Essential - snow glare can cause snow blindness'
      },
      {
        id: 6,
        name: 'Sandals',
        category: 'clothing',
        status: 'problem',
        aiMessage: 'Not suitable for snowy mountain conditions'
      },
      {
        id: 7,
        name: 'Light jacket',
        category: 'clothing',
        status: 'problem',
        aiMessage: 'Insufficient for Colorado winter - need insulated coat'
      },
      {
        id: 8,
        name: 'Hiking boots',
        category: 'clothing',
        status: 'good',
        aiMessage: 'Great choice - ensure they are waterproof'
      }
    ],
    
    suggestions: [
      {
        id: 101,
        name: 'Insulated winter coat',
        category: 'clothing',
        status: 'suggestion',
        aiMessage: 'Essential for 25-40°F mountain weather'
      },
      {
        id: 102,
        name: 'Thermal base layers',
        category: 'clothing',
        status: 'suggestion',
        aiMessage: 'Layering is key for variable mountain weather'
      },
      {
        id: 103,
        name: 'Lip balm with SPF',
        category: 'toiletries',
        status: 'suggestion',
        aiMessage: 'High altitude = dry air + intense sun exposure'
      },
      {
        id: 104,
        name: 'Hand & toe warmers',
        category: 'comfort',
        status: 'suggestion',
        aiMessage: 'Useful for skiing and extended outdoor activities'
      },
      {
        id: 105,
        name: 'Altitude sickness medication',
        category: 'health',
        status: 'suggestion',
        aiMessage: 'Denver is 5,280ft - Boulder even higher. Prepare accordingly'
      },
      {
        id: 106,
        name: 'Moisturizer',
        category: 'toiletries',
        status: 'suggestion',
        aiMessage: 'Mountain air is very dry - prevent skin cracking'
      }
    ]
  },
  
  nyc: {
    id: 'nyc',
    icon: '💼',
    title: 'NYC Business Trip',
    destination: 'New York City, New York',
    dates: 'Feb 3-5, 2026',
    duration: '2 nights',
    weather: {
      temp: '30-38°F',
      condition: 'Partly cloudy',
      precipitation: '15% precipitation chance',
      icon: '⛅'
    },
    tripType: 'Business / Conference',
    accommodation: 'Hotel',
    
    userItems: [
      {
        id: 1,
        name: '5 suits',
        category: 'clothing',
        status: 'warning',
        aiMessage: '2 suits sufficient for 2-night trip - reduces luggage weight',
        suggestion: '2 suits'
      },
      {
        id: 2,
        name: 'Laptop + charger',
        category: 'electronics',
        status: 'good',
        aiMessage: 'Essential for business travel'
      },
      {
        id: 3,
        name: 'Business cards',
        category: 'documents',
        status: 'good',
        aiMessage: 'Great for networking at conferences'
      },
      {
        id: 4,
        name: 'Gym clothes',
        category: 'clothing',
        status: 'good',
        aiMessage: 'Hotel has fitness center - good for de-stressing'
      },
      {
        id: 5,
        name: 'Beach towel',
        category: 'comfort',
        status: 'problem',
        aiMessage: 'Not needed for NYC winter business trip'
      },
      {
        id: 6,
        name: 'Passport',
        category: 'documents',
        status: 'warning',
        aiMessage: 'Domestic flight - driver\'s license is sufficient'
      },
      {
        id: 7,
        name: 'Compact umbrella',
        category: 'comfort',
        status: 'good',
        aiMessage: 'Smart choice for unpredictable NYC weather'
      }
    ],
    
    suggestions: [
      {
        id: 101,
        name: 'Portable phone charger',
        category: 'electronics',
        status: 'suggestion',
        aiMessage: 'Long days of meetings drain your battery'
      },
      {
        id: 102,
        name: 'Comfortable walking shoes',
        category: 'clothing',
        status: 'suggestion',
        aiMessage: 'NYC involves lots of walking between venues'
      },
      {
        id: 103,
        name: 'Warm scarf',
        category: 'clothing',
        status: 'suggestion',
        aiMessage: 'February temps near freezing - wind chill is real'
      },
      {
        id: 104,
        name: 'Gloves',
        category: 'clothing',
        status: 'suggestion',
        aiMessage: 'Essential for walking between meetings'
      },
      {
        id: 105,
        name: 'Dress shoes (comfortable)',
        category: 'clothing',
        status: 'suggestion',
        aiMessage: 'You\'ll be on your feet more than you expect'
      }
    ]
  }
};

// Category definitions
const categories = {
  clothing: { name: 'Clothing', icon: '👕' },
  toiletries: { name: 'Toiletries', icon: '🧴' },
  documents: { name: 'Documents', icon: '📄' },
  electronics: { name: 'Electronics', icon: '🔌' },
  health: { name: 'Health', icon: '💊' },
  comfort: { name: 'Comfort', icon: '✨' }
};

// Status definitions
const statusConfig = {
  good: {
    label: 'Approved',
    color: '#10b981',
    bgColor: '#ecfdf5',
    borderColor: '#a7f3d0',
    icon: '✓'
  },
  warning: {
    label: 'Caution',
    color: '#f59e0b',
    bgColor: '#fffbeb',
    borderColor: '#fde68a',
    icon: '!'
  },
  problem: {
    label: 'Problem',
    color: '#ef4444',
    bgColor: '#fef2f2',
    borderColor: '#fecaca',
    icon: '✕'
  },
  suggestion: {
    label: 'Suggested',
    color: '#3b82f6',
    bgColor: '#eff6ff',
    borderColor: '#bfdbfe',
    icon: '+'
  }
};

// Helper function to get current trip from URL or localStorage
function getCurrentTrip() {
  const urlParams = new URLSearchParams(window.location.search);
  const tripId = urlParams.get('trip') || localStorage.getItem('currentTrip') || 'miami';
  return tripsData[tripId] || tripsData.miami;
}

// Save current trip selection
function setCurrentTrip(tripId) {
  localStorage.setItem('currentTrip', tripId);
}

// Get user's packing list state (with any modifications)
function getPackingState() {
  const saved = localStorage.getItem('packingState');
  return saved ? JSON.parse(saved) : null;
}

// Save packing state
function savePackingState(state) {
  localStorage.setItem('packingState', JSON.stringify(state));
}

// Clear packing state (for starting fresh)
function clearPackingState() {
  localStorage.removeItem('packingState');
}
