
import Unlimited from "../../../assets/duotone/Unlimited.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UnlimitedIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Unlimited} data-testid="UnlimitedIcon" className={classes} />
  );
}
