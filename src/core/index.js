import React from "react";
import { render, setConfig } from "core/functions";
import Application from "core/Application";
import reportWebVitals from "reportWebVitals";

const appBuilder = () => {
    setConfig();
  
    render(<Application />);
      
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
};

export default appBuilder;