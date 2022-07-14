
import Wing from "../../../assets/duotone/Wing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Wing} data-testid="WingIcon" className={classes} />
  );
}
