
import Chainlink from "../../../assets/filled/Chainlink.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChainlinkIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Chainlink data-testid="ChainlinkIcon" className={classes} />
  );
}
