
import Frame from "../../../assets/filled/Frame.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FrameIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame data-testid="FrameIcon" className={classes} />
  );
}
