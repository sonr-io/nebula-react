
import Colorfilter from "../../../assets/outline/Colorfilter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ColorfilterIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Colorfilter data-testid="ColorfilterIcon" className={classes} />
  );
}
