import React, { useEffect, useRef } from "react";

function Home() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      console.log("vao");
      isMounted.current = false;
    };
  }, []);

  return <div>Home</div>;
}

export default Home;
