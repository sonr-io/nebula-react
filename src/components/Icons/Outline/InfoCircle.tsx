
import InfoCircle from "../../../assets/outline/InfoCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function InfoCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <InfoCircle data-testid="InfoCircleIcon" className={classes} />
  );
}