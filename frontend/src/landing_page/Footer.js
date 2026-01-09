import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240,240,240)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              alt="logo"
              style={{ width: "50%" }}
            />
            <p>© 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
            <i class="fa fa-twitter" aria-hidden="true"></i>{" "}
            <i class="fa fa-facebook-official" aria-hidden="true"></i>{" "}
            <i class="fa fa-instagram" aria-hidden="true"></i>{" "}
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <hr />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open demat account</a>
            <br></br>
            <a href="">Minor demat account</a>
            <br></br>
            <a href="">NRI demat account</a>
            <br></br>
            <a href="">Commodity</a>
            <br></br>
            <a href="">Dematerialisation</a>
            <br></br>
            <a href="">Fund transfer</a>
            <br></br>
            <a href="">MTF</a>
            <br></br>
            <a href="">Referral program</a>
            <br></br>
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Contact us</a>
            <br></br>
            <a href="">Support portal</a>
            <br></br>
            <a href="">How to file a complaint?</a>
            <br></br>
            <a href="">Status of your complaints</a>
            <br></br>
            <a href="">Bulletin</a>
            <br></br>
            <a href="">Circular</a>
            <br></br>
            <a href="">Z-Connect blog</a>
            <br></br>
            <a href="">Downloads</a>
            <br></br>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br></br>
            <a href="">Philosophy</a>
            <br></br>
            <a href="">Press & media</a>
            <br></br>
            <a href="">Careers</a>
            <br></br>
            <a href="">Zerodha Cares (CSR)</a>
            <br></br>
            <a href="">Zerodha.tech</a>
            <br></br>
            <a href="">Open source</a>
          </div>
          <div className="col">
            <p>Quick links</p>
            <a href="">Upcoming IPOs</a>
            <br></br>
            <a href="">Brokerage charges</a>
            <br></br>
            <a href="">Market holidays</a>
            <br></br>
            <a href="">Economic calendar</a>
            <br></br>
            <a href="">Calculators</a>
            <br></br>
            <a href="">Markets</a>
            <br></br>
            <a href="">Sectors</a>
            <br></br>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to
            <a href=""> complaints@zerodha.com</a>, for DP related to{" "}
            <a href="">dp@zerodha.com</a>. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a href="">Smart Online Dispute Resolution</a> |
            <a href=""> Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href="">NSE broker factsheet</a>
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services,please{" "}
            <a href="">create a ticket here.</a>
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
