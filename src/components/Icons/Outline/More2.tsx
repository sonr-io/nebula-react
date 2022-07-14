
import More2 from "../../../assets/outline/More2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function More2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={More2} data-testid="More2Icon" className={classes} />
  );
}
