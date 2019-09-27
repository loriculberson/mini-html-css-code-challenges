const handleButtonClick = () => {
  const buttons = document.querySelectorAll('.state');
  buttons.forEach(function(button){
    button.addEventListener('click', function(event){
      clearStateInfo();
      displayStateFacts(event.target.id);
    })
  })
}

const displayStateFacts = (stateName) => {
  //code goes here
}

const clearStateInfo = () => {
  const stateFacts = document.querySelector('.state-facts');
  stateFacts.innerHTML = '';
}

handleButtonClick();

const usStates = {
  california: {
    id: 3,
    fullStateName: 'California',
    capital: "Sacramento",
    statehood: '1850',
    timeZone: 'pacific',
    touristSpots: ['Nappa Valley', 'Hollywood Sign', 'San Diego Zoo']
  },
  colorado: {
    id: 2,
    fullStateName: 'Colorado',
    capital: 'Denver',
    statehood: '1876',
    timeZone: 'mountain',
    touristSpots: ['Mountains', 'Garden of the Gods', "Denver's Flagship REI"]
  },
  georgia: {
    id: 4,
    fullStateName: 'Georgia',
    capital: 'Atlanta',
    statehood: '1788',
    timeZone: 'eastern',
    touristSpots: ['Georgia Aquarium', 'World of Coke', 'Rock City']
  },
  montana: {
    id: 5,
    fullStateName: 'Montana',
    capital: 'Helena',
    statehood: '1889',
    timeZone: 'mountain',
    touristSpots: ['Glacier National Park', 'Lake McDonald', 'Logan Pass']
  },
  newyork: {
    id: 6,
    fullStateName: 'New York',
    capital: 'Albany',
    statehood: '1788',
    timeZone: 'eastern',
    touristSpots: ['Broadway', 'Empire State Building', 'any bakery']
  }, 
  texas: {
    id: 1,
    fullStateName: 'Texas',
    capital: 'Austin',
    statehood: '1845',
    timeZone: 'central',
    touristSpots: ['Big Bend National Park', 'The Alamo', 'Space Center Houston']
  }
};