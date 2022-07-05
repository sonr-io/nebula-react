
import DirectboxReceive from "../../../assets/outline/DirectboxReceive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DirectboxReceiveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectboxReceive data-testid="DirectboxReceiveIcon" className={classes} />
  );
}
