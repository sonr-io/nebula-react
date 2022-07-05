
import Ram from "../../../assets/duotone/Ram.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RamIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Ram data-testid="RamIcon" className={classes} />
  );
}
