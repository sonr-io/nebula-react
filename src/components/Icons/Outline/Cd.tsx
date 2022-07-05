
import Cd from "../../../assets/outline/Cd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CdIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Cd data-testid="CdIcon" className={classes} />
  );
}
