import { cn } from "../utils/cn.js";
import { useEffect, useRef } from "react";

export const Card = ({ exchange, img, symbol }) => {
  const cardEl = useRef(null);
  const priceEl = useRef(null);
  const iconEl = useRef(null);

  useEffect(() => {
    const pollTickerContinuously = async (exchange, symbol) => {
      while (exchange) {
        try {
          const ticker = await exchange.watchTicker(symbol);

          priceEl.current.textContent = `$ ${exchange.priceToPrecision(symbol, ticker.close)}`;
          priceEl.current.className =
            ticker.previousClose > ticker.close
              ? "text-green-600"
              : ticker.previousClose < ticker.close
                ? "text-red-600"
                : "text-black";
          iconEl.current.className =
            ticker.previousClose > ticker.close
              ? "icon-[fa-solid--caret-up] text-green-600"
              : ticker.previousClose < ticker.close
                ? "icon-[fa-solid--caret-down] text-red-600"
                : "";

          if (!cardEl.current.classList.contains("fade-in")) {
            cardEl.current.classList.add("fade-in");
          }

          await exchange.sleep(100);
        } catch {
          priceEl.current.innerHTML = "Symbol Error";
        }
      }
    };

    pollTickerContinuously(exchange, symbol);
  }, []);

  return (
    <figure
      ref={cardEl}
      className={cn("relative w-64 cursor-pointer overflow-hidden p-4")}
    >
      <div className="font-medium flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <span className="uppercase">{symbol.split("/")[0]}:</span>
        <div className="flex items-center gap-2">
          <p ref={priceEl}></p>
          <span ref={iconEl} className="w-4 h-4"></span>
        </div>
      </div>
    </figure>
  );
};
