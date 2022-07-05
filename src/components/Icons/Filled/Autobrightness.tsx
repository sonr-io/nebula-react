
import Autobrightness from "../../../assets/filled/Autobrightness.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AutobrightnessIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Autobrightness data-testid="AutobrightnessIcon" className={classes} />
  );
}
