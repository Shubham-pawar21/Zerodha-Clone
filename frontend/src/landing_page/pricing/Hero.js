function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Charges</h1>
        <h3 className="text-muted mt-2">List of all charges and taxes</h3>
        <div className="row p-5 mt-5">
          <div className="col-4 p-3">
            <img src="media/images/pricingEquity.svg" />
            <h3>Free equity delivery</h3>
            <p className="mt-3 text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/images/intradayTrades.svg" />
            <h3>Intraday and F&O trades</h3>
            <p className="mt-3 text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/images/pricingEquity.svg" />
            <h3>Free direct MF</h3>
            <p className="mt-3 text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
