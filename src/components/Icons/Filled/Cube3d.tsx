
import Cube3d from "../../../assets/filled/Cube3d.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Cube3dIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Cube3d data-testid="Cube3dIcon" className={classes} />
  );
}
