
import Polyswarm from "../../../assets/outline/Polyswarm.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PolyswarmIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Polyswarm data-testid="PolyswarmIcon" className={classes} />
  );
}
