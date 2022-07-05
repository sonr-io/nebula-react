
import Frame7 from "../../../assets/duotone/Frame7.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Frame7Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame7 data-testid="Frame7Icon" className={classes} />
  );
}
