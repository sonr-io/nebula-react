
import Grid3 from "../../../assets/filled/Grid3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Grid3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Grid3 data-testid="Grid3Icon" className={classes} />
  );
}
