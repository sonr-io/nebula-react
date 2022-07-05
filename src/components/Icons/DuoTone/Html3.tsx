
import Html3 from "../../../assets/duotone/Html3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Html3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Html3 data-testid="Html3Icon" className={classes} />
  );
}
