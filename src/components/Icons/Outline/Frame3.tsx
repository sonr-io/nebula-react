
import Frame3 from "../../../assets/outline/Frame3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Frame3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame3 data-testid="Frame3Icon" className={classes} />
  );
}
