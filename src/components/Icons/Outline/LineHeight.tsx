
import LineHeight from "../../../assets/outline/LineHeight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LineHeightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <LineHeight data-testid="LineHeightIcon" className={classes} />
  );
}
