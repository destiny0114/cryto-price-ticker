import Marquee from "./components/Marquee.jsx";
import ccxt from "ccxt";
import { useState } from "react";
import { chunk } from "./utils/helper.js";

const coins = ["LINK/USDT", "BTC/USDT", "ETH/USDT", "STX/USDT", "BCH/USDT", "LTC/USDT", "AAVE/USDT", "ADA/USDT", "BNB/USDT", "SOL/USDT", "XRP/USDT", "DOT/USDT", "LTC/USDT", "NEAR/USDT", "DOGE/USDT", "AVAX/USDT", "TRX/USDT", "SHIB/USDT", "ETC/USDT", "XLM/USDT", "WBTC/USDT", "WIF/USDT", "PEPE/USDT", "FIL/USDT", "ENS/USDT", "EOS/USDT", "GALA/USDT", "GRT/USDT", "ICP/USDT", "ALGO/USDT", "AXS/USDT", "JUP/USDT", "UNI/USDT", "OP/USDT", "RUNE/USDT", "SUI/USDT", "SEI/USDT", "HBAR/USDT", "VET/USDT", "MATIC/USDT"];

const chunkedCoins = chunk(coins, 10);

function App() {
  const [exchange] = useState(() => new ccxt.pro.binance());

  return (
    <div className="body__inner-wrapper">
      <Marquee exchange={exchange} symbols={chunkedCoins[0]} id="marquee__inner" />
      <Marquee exchange={exchange} symbols={chunkedCoins[1]} id="marquee__inner2" />
      <Marquee exchange={exchange} symbols={chunkedCoins[2]} id="marquee__inner3" />
      <Marquee exchange={exchange} symbols={chunkedCoins[3]} id="marquee__inner4" />
    </div>
  );
}

export default App;
