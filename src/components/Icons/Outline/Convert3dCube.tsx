
import Convert3dCube from "../../../assets/outline/Convert3dCube.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Convert3dCubeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Convert3dCube data-testid="Convert3dCubeIcon" className={classes} />
  );
}
