
import Underline from "../../../assets/outline/Underline.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UnderlineIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Underline data-testid="UnderlineIcon" className={classes} />
  );
}
