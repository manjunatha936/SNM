import React from "react";
import Login from "../Components/Login";
import Image from "next/image";

const LoginFlow = () => {
  return (
    <div className="sn-login-wrap">
      <div className="snm-bg-pattern"></div>
      <div className="sn-login-cnt">
        <Image src="/assets/color-logo.svg" alt="Logo" width={71} height={38} />
        <p className="sn-login-cnt__des">
          Ant Design is the most influential web design specification in Xihu
          district
        </p>
        <div className="snm-form">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginFlow;
