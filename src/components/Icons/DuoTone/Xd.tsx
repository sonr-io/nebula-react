
import Xd from "../../../assets/duotone/Xd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function XdIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Xd} data-testid="XdIcon" className={classes} />
  );
}
