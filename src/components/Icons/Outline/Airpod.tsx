
import Airpod from "../../../assets/outline/Airpod.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AirpodIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Airpod} data-testid="AirpodIcon" className={classes} />
  );
}
