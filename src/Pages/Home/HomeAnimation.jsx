import { useEffect, useRef } from "react";

import { OrbitingShapes } from "../../Components/ThreeJsAnimations/OrbitingShapes";

export const HomeAnimation = () => {
  // const canvasRef = useRef(null);

  useEffect(() => {
    if (document.getElementById("canvas")) {
      return null;
    } else {
      OrbitingShapes();
    }
  }, []);

  // return <canvas ref={canvasRef} />;
};
