
import Grid4 from "../../../assets/outline/Grid4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Grid4Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Grid4 data-testid="Grid4Icon" className={classes} />
  );
}
