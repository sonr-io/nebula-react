
import Wing from "../../../assets/filled/Wing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Wing data-testid="WingIcon" className={classes} />
  );
}
