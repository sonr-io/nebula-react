
import Airpod from "../../../assets/duotone/Airpod.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AirpodIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Airpod data-testid="AirpodIcon" className={classes} />
  );
}
