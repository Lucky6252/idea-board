import Head from "./components/head/head.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";


function App() {
  const ideaCards = [
  {
    "id": 1,
    "title": "Scooter Delivery",
    "description": "Buying a brand a new scooter is R6000. Looking for a driver. Approache multiple businesses including Checkers 6060, Registering with Mr Delivery"
  },
  {
    "id": 2,
    "title": "Scooter Delivery",
    "description": "Buying a brand a new scooter is R6000. Looking for a driver. Approache multiple businesses including Checkers 6060, Registering with Mr Delivery"
  },
  {
    "id": 3,
    "title": "Scooter Delivery",
    "description": "Buying a brand a new scooter is R6000. Looking for a driver. Approache multiple businesses including Checkers 6060, Registering with Mr Delivery"
  },
  {
    "id": 4,
    "title": "Scooter Delivery",
    "description": "Buying a brand a new scooter is R6000. Looking for a driver. Approache multiple businesses including Checkers 6060, Registering with Mr Delivery"
  },
  {
    "id": 5,
    "title": "Scooter Delivery",
    "description": "Buying a brand a new scooter is R6000. Looking for a driver. Approache multiple businesses including Checkers 6060, Registering with Mr Delivery"
  }
]


  return (
    <div className="App">
      <Head/>
      <CardList ideaCards={ideaCards}/>
    </div>
  );
}

export default App;
