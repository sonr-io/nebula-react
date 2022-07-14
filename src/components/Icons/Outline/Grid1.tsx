
import Grid1 from "../../../assets/outline/Grid1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Grid1 data-testid="Grid1Icon" className={classes} />
  );
}
