
import Convert3dCube from "../../../assets/duotone/Convert3dCube.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Convert3dCubeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Convert3dCube data-testid="Convert3dCubeIcon" className={classes} />
  );
}
