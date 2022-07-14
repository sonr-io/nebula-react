
import Photoshop from "../../../assets/duotone/Photoshop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PhotoshopIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Photoshop data-testid="PhotoshopIcon" className={classes} />
  );
}
