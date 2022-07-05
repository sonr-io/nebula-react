
import Chainlink from "../../../assets/outline/Chainlink.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ChainlinkIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Chainlink data-testid="ChainlinkIcon" className={classes} />
  );
}
