
import MobileProgramming from "../../../assets/outline/MobileProgramming.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MobileProgrammingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MobileProgramming data-testid="MobileProgrammingIcon" className={classes} />
  );
}
