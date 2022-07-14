
import CubeScan3d from "../../../assets/filled/CubeScan3d.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CubeScan3dIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CubeScan3d data-testid="CubeScan3dIcon" className={classes} />
  );
}
