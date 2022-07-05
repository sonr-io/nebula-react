
import Stop from "../../../assets/filled/Stop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function StopIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Stop data-testid="StopIcon" className={classes} />
  );
}
