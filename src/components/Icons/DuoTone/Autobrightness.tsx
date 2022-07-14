
import Autobrightness from "../../../assets/duotone/Autobrightness.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AutobrightnessIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Autobrightness} data-testid="AutobrightnessIcon" className={classes} />
  );
}
