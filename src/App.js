import Footer from "./components/Footer";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <>
      <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
        {/* The Grid */}
        <div className="w3-row-padding">
          <Left></Left>
          <Right></Right>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
