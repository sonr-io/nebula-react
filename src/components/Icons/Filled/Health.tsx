
import Health from "../../../assets/filled/Health.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HealthIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Health data-testid="HealthIcon" className={classes} />
  );
}
