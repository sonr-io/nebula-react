
import DirectDown from "../../../assets/outline/DirectDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DirectDownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DirectDown data-testid="DirectDownIcon" className={classes} />
  );
}
