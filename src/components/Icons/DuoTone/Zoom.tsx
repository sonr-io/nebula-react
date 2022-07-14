
import Zoom from "../../../assets/duotone/Zoom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ZoomIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Zoom data-testid="ZoomIcon" className={classes} />
  );
}
