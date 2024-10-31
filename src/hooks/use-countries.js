import { useEffect, useState } from "react";

const useCountry = (name) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  console.log("useCountry");
  console.log("useCountry");
  console.log("useCountry");
  console.log("useCountry");
  console.log("useCountry");
  
  useEffect(() => {}, [name]);

  return {
    loading,
    error,
    country,
  };
};

export default useCountry;
