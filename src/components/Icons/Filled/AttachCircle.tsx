
import AttachCircle from "../../../assets/filled/AttachCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AttachCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AttachCircle data-testid="AttachCircleIcon" className={classes} />
  );
}
