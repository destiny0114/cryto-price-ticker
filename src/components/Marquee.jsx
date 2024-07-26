import { useState, useRef, useEffect } from "react";
import { Card } from "./Card";

export default function Marquee({ exchange, symbols, id }) {
  const [results, setResults] = useState([]);
  const marquee = useRef(null);

  useEffect(() => {
    const pollTickerContinuously = async (exchange, symbols) => {
      try {
        const tickers = await exchange.fetchTickers(symbols);
        console.log(symbols);
        console.log(tickers);
        setResults(tickers);
      } catch {
        // priceEl.current.innerHTML = "Symbol Error";
      }
    };

    pollTickerContinuously(exchange, symbols);
    setInterval(() => {
      pollTickerContinuously(exchange, symbols);
    }, 20000);
  }, []);

  useEffect(() => {
    if (!id) return;
    const checkIfMarqueeIsOffScreen = (marqueeRef) => {
      const marquee = marqueeRef.current;
      if (marquee) {
        const firstSpan = marquee.querySelector("div");
        if (firstSpan) {
          const rect = firstSpan.getBoundingClientRect();
          if (rect.left <= 0) {
            marquee.style.transform = "translateX(0)";
            marquee.style.animation = `marquee 20s linear infinite`;
          }
        }
      }
    };

    const interval = setInterval(() => checkIfMarqueeIsOffScreen(marquee), 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="marquee">
      <div className="marquee__inner-wrap">
        <div ref={marquee} className={id}>
          {Object.entries(results).map(([symbol, ticker]) => (
            <Card key={symbol} exchange={exchange} symbol={symbol} ticker={ticker} />
          ))}
          {Object.entries(results).map(([symbol, ticker]) => (
            <Card key={symbol} exchange={exchange} symbol={symbol} ticker={ticker} />
          ))}
        </div>
      </div>
    </div>
  );
}
