
import Mouse1 from "../../../assets/duotone/Mouse1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Mouse1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Mouse1 data-testid="Mouse1Icon" className={classes} />
  );
}
