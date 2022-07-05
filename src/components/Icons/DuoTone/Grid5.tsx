
import Grid5 from "../../../assets/duotone/Grid5.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Grid5Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Grid5 data-testid="Grid5Icon" className={classes} />
  );
}
