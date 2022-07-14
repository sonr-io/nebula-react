
import Airplane from "../../../assets/duotone/Airplane.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AirplaneIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Airplane} data-testid="AirplaneIcon" className={classes} />
  );
}
