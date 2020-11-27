import React, { useState } from "react";
import { render } from "react-dom";
import { useTrail, animated as a } from "react-spring";
import "./styles.css";

const items = ["Item1"];
const config = { mass: 5, tension: 2000, friction: 200 };

function App() {
  const [toggle, set] = useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    y: toggle ? 0 : 20,
    width: toggle ? 300 : 0
  });

  return (
    <div className="trails-main" onClick={() => set((state) => !state)}>
      <div>
        {trail.map(({ y, width, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: y.interpolate((x) => `translate3d(0,${y}px,0)`)
            }}
          >
            <a.div style={{ width }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
