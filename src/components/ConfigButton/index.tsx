import React from "react";
import { browser } from "webextension-polyfill-ts";
import styled from "./style";

type Props = {
  className?: string;
};

const Component: React.FC<Props> = (props) => {
  const { className } = props;
  const handleClick = () => {
    browser.runtime.sendMessage("newConfig");
  };
  return (
    <div onClick={handleClick} className={className}>
      config
    </div>
  );
};

export default styled(Component);
