import React from "react";
import { Link } from "carbon-components-react";
import { Content } from "carbon-components-react/lib/components/UIShell";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import CarbonLogo from "../CarbonLogo";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <GlobalHeader />
      <Content className="app-content">
        <CarbonLogo />
        <div className="landing-info__container">
          <p className="app-text">
            Edit src/components/App/App.js and save to reload.
          </p>
          <span>
            <Link
              className="app-link"
              href="https://www.carbondesignsystem.com/tutorial/react/overview"
              onClick={function noRefCheck() {}}
            >
              Learn Carbon Components
            </Link>
          </span>
        </div>
      </Content>
    </div>
  );
}

export default App;
