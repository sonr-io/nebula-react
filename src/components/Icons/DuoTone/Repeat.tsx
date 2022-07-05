
import Repeat from "../../../assets/duotone/Repeat.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RepeatIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Repeat data-testid="RepeatIcon" className={classes} />
  );
}
