
import PercentageCircle from "../../../assets/filled/PercentageCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PercentageCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PercentageCircle data-testid="PercentageCircleIcon" className={classes} />
  );
}
