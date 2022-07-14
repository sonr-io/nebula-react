
import Square3d from "../../../assets/filled/Square3d.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Square3dIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Square3d data-testid="Square3dIcon" className={classes} />
  );
}