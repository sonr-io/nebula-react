
import Convert3dCube from "../../../assets/filled/Convert3dCube.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Convert3dCubeIcon({ className, dataTestid = "Convert3dCubeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Convert3dCube data-testid={dataTestid} className={classes} {...rest} />
  );
}
