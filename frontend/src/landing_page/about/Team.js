function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  border-top">
        <h1 className=" text-center">People</h1>
      </div>

      <div
        className="row p-3  text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/shubham.jpg"
            alt="shubham image"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Shubham Pawar</h4>
        </div>
        <div className="col-6 p-3">
          <p>
            Shubham is a student pursuing his degree in Information Technology,
            with a strong interest in software development and modern fintech
            products. He enjoys building clean, user-friendly interfaces and
            learning how technology can simplify trading and investing for
            everyone.
          </p>

          <p>
            He is currently exploring full-stack development and improving his
            skills by creating real-world projects, including a Zerodha-style
            platform clone.
          </p>
          <p>
            Connect on: <a href="">Homepage </a> / <a href="">Instagram </a>/{" "}
            <a href="">LinkedIn </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
