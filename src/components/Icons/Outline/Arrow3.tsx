
import Arrow3 from "../../../assets/outline/Arrow3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Arrow3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Arrow3} data-testid="Arrow3Icon" className={classes} />
  );
}
