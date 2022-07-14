
import Share from "../../../assets/duotone/Share.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Share} data-testid="ShareIcon" className={classes} />
  );
}
