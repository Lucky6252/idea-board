import Head from "./components/head/head.component";
import CardList from "./components/card-list/card-list.component";
import Footer from "./components/footer/footer.component";
import "./App.css";

function App() {
  return (
    <div className="App" >
      <Head />
      <CardList />
      <Footer/>
    </div>
  );
}

export default App;
