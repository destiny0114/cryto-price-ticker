import { cn } from "../utils/cn.js";

export const Card = ({ exchange, symbol, ticker }) => {
  return (
    <div
      className={cn(
        "w-[300px] flex justify-center items-center cursor-pointer overflow-hidden text-[1rem]",
        symbol === "FIL/USDT" && "bg-red-600",
      )}
    >
      <div className="font-medium flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={`https://crypto-rss.nmor.my/img/${symbol.split("/")[0].toLowerCase()}.png`}
        />
        <span className="uppercase" style={{ color: "white" }}>
          {symbol.split("/")[0]}:
        </span>
        <div className="flex items-center gap-2">
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
              "w-4 h-4",
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
        </div>
      </div>
    </div>
  );
};
