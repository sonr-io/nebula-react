
import LampOn from "../../../assets/filled/LampOn.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LampOnIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LampOn data-testid="LampOnIcon" className={classes} />
  );
}
