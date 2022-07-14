
import Weight1 from "../../../assets/outline/Weight1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Weight1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Weight1} data-testid="Weight1Icon" className={classes} />
  );
}
