import Marquee from "../components/Marquee.jsx";
import { cn } from "../utils/cn.js";
import { Card } from "../components/Card.jsx";

function ModernTicker({ chunkedCoins, exchange }) {
  return (
    <div id="modern">
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

export default ModernTicker;
