
import TruckTime from "../../../assets/duotone/TruckTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TruckTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TruckTime data-testid="TruckTimeIcon" className={classes} />
  );
}
