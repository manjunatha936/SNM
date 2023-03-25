import React from "react";
import Login from "../Components/Login";

const LoginFlow = () => {
  return (
    <div className="sn-login-wrap">
      <div className="container">
        <div className="row">
          <div className="sn-login-cnt">
            <p>
              Ant Design is the most influential web design specification in
              Xihu district
            </p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFlow;
