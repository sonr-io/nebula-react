
import DirectLeft from "../../../assets/duotone/DirectLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DirectLeftIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectLeft data-testid="DirectLeftIcon" className={classes} />
  );
}
