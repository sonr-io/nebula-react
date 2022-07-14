
import MoreCircle from "../../../assets/duotone/MoreCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MoreCircle} data-testid="MoreCircleIcon" className={classes} />
  );
}
