
import Receipt21 from "../../../assets/outline/Receipt21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Receipt21Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Receipt21} data-testid="Receipt21Icon" className={classes} />
  );
}
