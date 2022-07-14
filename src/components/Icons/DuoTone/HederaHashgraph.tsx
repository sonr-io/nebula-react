
import HederaHashgraph from "../../../assets/duotone/HederaHashgraph.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HederaHashgraphIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <HederaHashgraph data-testid="HederaHashgraphIcon" className={classes} />
  );
}
