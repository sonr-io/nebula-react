
import Health from "../../../assets/outline/Health.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HealthIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Health data-testid="HealthIcon" className={classes} />
  );
}
