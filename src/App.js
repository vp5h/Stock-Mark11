import { useState } from "react";
import "./styles.css";

export default function App() {
  const [profit, setProfit] = useState("");
  const [bPrice, setbPrice] = useState("");
  const [quantity, setquantity] = useState("");
  const [cPrice, setcPrice] = useState("");
  const [mes, setMes] = useState("Check You Profit or Loss");
  const [percent, setPercent] = useState("");
  const [bg, setBg] = useState("#1f1f1f");
  function BpriceHAndler(event) {
    var BPrice = Number(event.target.value);
    setbPrice(BPrice);
  }

  function QuantityHAndler(event) {
    var qquantity = Number(event.target.value);
    setquantity(qquantity);
  }
  function CpriceHAndler(event) {
    var ccPrice = Number(event.target.value);
    setcPrice(ccPrice);
  }
  function Profit() {
    if (bPrice > 0 && quantity > 0) {
      var diff = cPrice - bPrice;
      var amt = diff * quantity;
      setPercent((diff / bPrice) * 100);
      if (amt > 0) {
        if (cPrice / bPrice > 1.5) {
          setBg("#964B00");
        } else {
          setBg("");
        }
        setMes("You Got a Profit of");
        setProfit(Math.abs(amt));
      } else if (amt === 0) {
        setMes("Looks Like You are Fine");
        setProfit("");
        setBg("");
      } else {
        if (cPrice / bPrice < 0.5) {
          setBg("Black");
        } else {
          setBg("");
        }
        setMes("You Got a loss of");
        setProfit(Math.abs(amt));
      }

      // console.log(amt);
    } else {
      setMes("Add a Valid Input");
      setProfit("");
    }
  }
  return (
    <div className="App" style={{ backgroundColor: bg }}>
      <section className="section">
        <div className="container container-center section-center">
          <header className="hero">
            <h1 className="hero-heading">Cash Register Manager</h1>
          </header>
          {/* <h1> Profit Calculator</h1> */}

          <h4>Enter the amount and Qunatity and See the Magic</h4>

          <input placeholder="Buy Price" onChange={BpriceHAndler}></input>
          <input placeholder="Qunatity" onChange={QuantityHAndler}></input>
          <input placeholder="Current Price" onChange={CpriceHAndler}></input>

          <button onClick={Profit}>Calculate</button>

          <h3>
            {mes} {profit}
          </h3>
          <h3>
            {mes} {Math.abs(percent).toFixed(2)}%
          </h3>
        </div>
      </section>
    </div>
  );
}
