
import Grid9 from "../../../assets/outline/Grid9.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid9Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Grid9} data-testid="Grid9Icon" className={classes} />
  );
}
