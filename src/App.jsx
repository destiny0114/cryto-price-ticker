import Marquee from "./components/Marquee.jsx";
import { Card } from "./components/Card.jsx";
import ccxt from "ccxt";
import { useState } from "react";
import { chunk } from "./utils/helper.js";
import { cn } from "./utils/cn.js";

const coins = [
  {
    img: "https://crypto-rss.nmor.my/img/link.png",
    symbol: "LINK/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/btc.png",
    symbol: "BTC/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/eth.png",
    symbol: "ETH/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/stx.png",
    symbol: "STX/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/bch.png",
    symbol: "BCH/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/ltc.png",
    symbol: "LTC/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/aave.png",
    symbol: "AAVE/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/ada.png",
    symbol: "ADA/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/bnb.png",
    symbol: "BNB/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/sol.png",
    symbol: "SOL/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/xrp.png",
    symbol: "XRP/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/dot.png",
    symbol: "DOT/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/ltc.png",
    symbol: "LTC/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/ton.png",
    symbol: "TON/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/doge.png",
    symbol: "DOGE/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/avax.png",
    symbol: "AVAX/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/trx.png",
    symbol: "TRX/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/shib.png",
    symbol: "SHIB/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/etc.png",
    symbol: "ETC/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/xlm.png",
    symbol: "XLM/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/wbtc.png",
    symbol: "WBTC/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/wif.png",
    symbol: "WIF/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/pepe.png",
    symbol: "PEPE/USDT",
  },
  {
    img: "https://crypto-rss.nmor.my/img/fil.png",
    symbol: "FIL/USDT",
  },
];

const chunkedCoins = chunk(coins, 6);
function App() {
  const [exchange] = useState(() => new ccxt.pro.binance());

  return (
    <div>
      <div className="relative flex h-[500px] w-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-white md:shadow-xl">
        {chunkedCoins.map((coins, index) => (
          <Marquee
            key={index}
            className={cn(
              "[--duration:20s] [--gap:2rem]",
              index % 2 && "translate-x-[15%]",
            )}
          >
            {coins.map((coin) => (
              <Card key={coin.symbol} exchange={exchange} {...coin} />
            ))}
          </Marquee>
        ))}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-white from-50%"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] h-full bg-gradient-to-l from-white from-50%"></div>
      </div>
    </div>
  );
}

export default App;
