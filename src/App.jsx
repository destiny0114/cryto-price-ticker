import Marquee from "./components/Marquee.jsx";
import ccxt from "ccxt";
import { useState, useEffect, useDeferredValue } from "react";
import { Card } from "./components/Card";

const coins = [
  "LINK/USDT",
  "BTC/USDT",
  "ETH/USDT",
  "STX/USDT",
  "BCH/USDT",
  "LTC/USDT",
  "AAVE/USDT",
  "ADA/USDT",
  "BNB/USDT",
  "SOL/USDT",
  "XRP/USDT",
  "DOT/USDT",
  "NEAR/USDT",
  "DOGE/USDT",
  "AVAX/USDT",
  "TRX/USDT",
  "SHIB/USDT",
  "ETC/USDT",
  "XLM/USDT",
  "WBTC/USDT",
  "WIF/USDT",
  "PEPE/USDT",
  "FIL/USDT",
  "ENS/USDT",
  "EOS/USDT",
  "GALA/USDT",
  "GRT/USDT",
  "ICP/USDT",
  "ALGO/USDT",
  "AXS/USDT",
  "JUP/USDT",
  "UNI/USDT",
  "OP/USDT",
  "RUNE/USDT",
  "SUI/USDT",
  "SEI/USDT",
  "HBAR/USDT",
  "VET/USDT",
  "MATIC/USDT",
  "ZEC/USDT",
  "SUSHI/USDT",
  "YFI/USDT",
  "SNX/USDT",
  "CHZ/USDT",
  "EGLD/USDT",
  "DCR/USDT",
  "OM/USDT",
  "WBETH/USDT",
  "COTI/USDT",
  "MTL/USDT",
  "APT/USDT",
  "FET/USDT",
  "RENDER/USDT",
  "ATOM/USDT",
  "TAO/USDT",
  "ARB/USDT",
  "IMX/USDT",
  "INJ/USDT",
  "FDUSD/USDT",
  "AR/USDT",
  "NOT/USDT",
  "JASMY/USDT",
  "FLOKI/USDT",
];

function App() {
  const [data, setData] = useState(null);
  const deferredData = useDeferredValue(data);

  const [exchange] = useState(() => new ccxt.pro.binance());

  useEffect(() => {
    async function watchTickerLoop(exchange, symbols) {
      let loop = true;

      while (loop) {
        try {
          const data = await exchange.watchTickers(symbols);
          const [[symbol, ticker]] = Object.entries(data);

          setData((prevTickers) => ({
            ...prevTickers,
            [symbol]: ticker,
          }));
        } catch (e) {
          console.error(e);
          loop = false;
        }
      }
    }

    async function main() {
      await watchTickerLoop(exchange, coins);
      await exchange.close();
    }

    main();
  }, []);

  return (
    <div className="body__inner-wrapper">
      {deferredData && (
        <>
          <Marquee id="marquee__container">
            {coins.map((symbol) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={deferredData[symbol]}
              />
            ))}
            {coins.map((symbol) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={deferredData[symbol]}
                hidden
              />
            ))}
          </Marquee>
          <Marquee id="marquee__container2">
            {coins.map((symbol) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={deferredData[symbol]}
              />
            ))}
            {coins.map((symbol) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={deferredData[symbol]}
                hidden
              />
            ))}
          </Marquee>
          <Marquee id="marquee__container3">
            {coins.map((symbol) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={deferredData[symbol]}
              />
            ))}
            {coins.map((symbol) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={deferredData[symbol]}
                hidden
              />
            ))}
          </Marquee>
          <Marquee id="marquee__container4">
            {coins.map((symbol) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={deferredData[symbol]}
              />
            ))}
            {coins.map((symbol) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={deferredData[symbol]}
                hidden
              />
            ))}
          </Marquee>
        </>
      )}
    </div>
  );
}

export default App;
