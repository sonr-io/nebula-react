
import Zoom from "../../../assets/filled/Zoom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ZoomIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Zoom} data-testid="ZoomIcon" className={classes} />
  );
}
