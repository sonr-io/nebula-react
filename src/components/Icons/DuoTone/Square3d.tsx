
import Square3d from "../../../assets/duotone/Square3d.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Square3dIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Square3d data-testid="Square3dIcon" className={classes} />
  );
}
