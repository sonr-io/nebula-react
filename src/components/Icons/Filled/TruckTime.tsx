
import TruckTime from "../../../assets/filled/TruckTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TruckTimeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TruckTime data-testid="TruckTimeIcon" className={classes} />
  );
}
