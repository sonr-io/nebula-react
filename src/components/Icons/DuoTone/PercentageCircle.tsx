
import PercentageCircle from "../../../assets/duotone/PercentageCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PercentageCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PercentageCircle} data-testid="PercentageCircleIcon" className={classes} />
  );
}
