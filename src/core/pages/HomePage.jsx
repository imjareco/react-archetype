import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/products", { replace: true });
    }, []);
  
    return(
        <>
        </>
    );

};

export default HomePage;