import { cn } from "../utils/cn.js";

export const Card = ({ exchange, symbol, ticker, hidden }) => {
  return (
    <div className="marquee__item" aria-hidden={hidden ?? undefined}>
      <img
        width="32"
        height="32"
        alt=""
        src={`/img/${symbol.split("/")[0].toLowerCase()}.png`}
      />
      <span style={{ color: "white" }}>{symbol.split("/")[0]}:</span>
      {ticker ? (
        <>
          <p
            style={{
              color:
                ticker.previousClose > ticker.close
                  ? "green"
                  : ticker.previousClose < ticker.close
                    ? "red"
                    : "grey",
            }}
          >
            $ {`${exchange.numberToString(ticker.close)}`}
          </p>
          <span
            className={cn(
              ticker.previousClose > ticker.close
                ? "icon-[fa-solid--caret-up]"
                : ticker.previousClose < ticker.close
                  ? "icon-[fa-solid--caret-down]"
                  : "",
            )}
            style={{
              color:
                ticker.previousClose > ticker.close
                  ? "green"
                  : ticker.previousClose < ticker.close
                    ? "red"
                    : "",
            }}
          ></span>
        </>
      ) : (
        <div>CONNECTING...</div>
      )}
    </div>
  );
};
