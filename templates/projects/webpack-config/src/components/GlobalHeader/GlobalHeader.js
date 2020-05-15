import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from "carbon-components-react/lib/components/UIShell";

const GlobalHeader = () => (
  <Header aria-label="Carbon Tutorial">
    <SkipToContent />
    <HeaderName href="/" prefix="IBM">
      Carbon React App
    </HeaderName>
    <HeaderNavigation aria-label="Carbon React App">
      <HeaderMenuItem href="#">Add a Link</HeaderMenuItem>
    </HeaderNavigation>
  </Header>
);

export default GlobalHeader;
