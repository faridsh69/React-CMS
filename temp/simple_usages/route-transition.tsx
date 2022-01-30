import "./styles.css";
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const A = () => <div>You're on "/a": click to go to "/b"</div>;
const B = () => <div>Now on "/b": now click to go to "/a"</div>;

export default function Test() {
  const location = useLocation();
  const nodeRef = React.useRef(null);

  return (
    <div>
      <Link to="/a">a</Link>
      <Link to="/b">b</Link>
      <TransitionGroup>
        <CSSTransition
          nodeRef={nodeRef}
          key={location.key}
          timeout={300}
          classNames="my-node"
        >
          <div ref={nodeRef}>
            <Routes>
              <Route path="/a" element={<A />} />
              <Route path="/b" element={<B />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}
