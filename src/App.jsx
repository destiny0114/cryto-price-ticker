import Marquee from "./components/Marquee.jsx";
import ccxt from "ccxt";
import { useState, useEffect } from "react";
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
  const [results, setResults] = useState(null);
  const [exchange] = useState(() => new ccxt.pro.binance());

  useEffect(() => {
    const pollTickerContinuously = async (exchange, symbols) => {
      try {
        const tickers = await exchange.fetchTickers(symbols);
        setResults(tickers);
      } catch (error) {
        console.error(error);
      }
    };

    pollTickerContinuously(exchange, coins);
    setInterval(() => {
      pollTickerContinuously(exchange, coins);
    }, 5000);
  }, []);

  return (
    <div className="body__inner-wrapper">
      {results && (
        <>
          <Marquee id="marquee__container">
            {Object.entries(results).map(([symbol, ticker]) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={ticker}
              />
            ))}
            {Object.entries(results).map(([symbol, ticker]) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={ticker}
                hidden
              />
            ))}
          </Marquee>
          <Marquee id="marquee__container2">
            {Object.entries(results).map(([symbol, ticker]) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={ticker}
              />
            ))}
            {Object.entries(results).map(([symbol, ticker]) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={ticker}
                hidden
              />
            ))}
          </Marquee>
          <Marquee id="marquee__container3">
            {Object.entries(results).map(([symbol, ticker]) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={ticker}
              />
            ))}
            {Object.entries(results).map(([symbol, ticker]) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={ticker}
                hidden
              />
            ))}
          </Marquee>
          <Marquee id="marquee__container4">
            {Object.entries(results).map(([symbol, ticker]) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={ticker}
              />
            ))}
            {Object.entries(results).map(([symbol, ticker]) => (
              <Card
                key={symbol}
                exchange={exchange}
                symbol={symbol}
                ticker={ticker}
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
