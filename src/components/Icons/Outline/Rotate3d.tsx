
import Rotate3d from "../../../assets/outline/Rotate3d.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Rotate3dIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Rotate3d} data-testid="Rotate3dIcon" className={classes} />
  );
}
