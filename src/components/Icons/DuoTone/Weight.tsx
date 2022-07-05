
import Weight from "../../../assets/duotone/Weight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function WeightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Weight data-testid="WeightIcon" className={classes} />
  );
}
