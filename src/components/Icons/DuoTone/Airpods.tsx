
import Airpods from "../../../assets/duotone/Airpods.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AirpodsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Airpods} data-testid="AirpodsIcon" className={classes} />
  );
}
