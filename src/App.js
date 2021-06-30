import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Jobs from "./components/jobs/Jobs";

function App() {
  return (
    <div>
      <Header title="The Job Board" />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
