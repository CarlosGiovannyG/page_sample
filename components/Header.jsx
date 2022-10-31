import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = ({ children }) => {
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container col-11 m-0">
        <div className="col-1 p-0">
          <div className="navbar-brand">
            <Link href="/">
              <Image
                style={{
                  cursor: "pointer",
                }}
                src="https://res.cloudinary.com/carlosgiovanny/image/upload/v1667020309/samples/PFS_spdtbh.png"
                alt="BookIT"
                height={40}
                width={150}
              />
            </Link>
          </div>
        </div>

        {children}

        <Link href={"/"} className="login-link">
          <div className="login">
            <span className="login">Iniciar Session</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
