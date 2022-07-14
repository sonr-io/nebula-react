
import Buliding from "../../../assets/duotone/Buliding.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BulidingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Buliding} data-testid="BulidingIcon" className={classes} />
  );
}
