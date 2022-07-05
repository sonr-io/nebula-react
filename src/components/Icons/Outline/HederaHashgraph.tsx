
import HederaHashgraph from "../../../assets/outline/HederaHashgraph.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HederaHashgraphIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HederaHashgraph data-testid="HederaHashgraphIcon" className={classes} />
  );
}
