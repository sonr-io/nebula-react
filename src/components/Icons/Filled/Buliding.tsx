
import Buliding from "../../../assets/filled/Buliding.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BulidingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Buliding data-testid="BulidingIcon" className={classes} />
  );
}
