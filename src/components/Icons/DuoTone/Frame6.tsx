
import Frame6 from "../../../assets/duotone/Frame6.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Frame6Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame6 data-testid="Frame6Icon" className={classes} />
  );
}
