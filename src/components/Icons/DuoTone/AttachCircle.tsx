
import AttachCircle from "../../../assets/duotone/AttachCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AttachCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AttachCircle data-testid="AttachCircleIcon" className={classes} />
  );
}
