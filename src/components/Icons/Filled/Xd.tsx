
import Xd from "../../../assets/filled/Xd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function XdIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Xd data-testid="XdIcon" className={classes} />
  );
}
