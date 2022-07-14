
import Frame from "../../../assets/duotone/Frame.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FrameIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame data-testid="FrameIcon" className={classes} />
  );
}
