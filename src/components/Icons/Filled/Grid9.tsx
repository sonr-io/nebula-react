
import Grid9 from "../../../assets/filled/Grid9.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Grid9Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Grid9 data-testid="Grid9Icon" className={classes} />
  );
}
