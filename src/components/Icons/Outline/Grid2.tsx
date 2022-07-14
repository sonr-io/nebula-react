
import Grid2 from "../../../assets/outline/Grid2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Grid2} data-testid="Grid2Icon" className={classes} />
  );
}
