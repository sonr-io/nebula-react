
import Building from "../../../assets/duotone/Building.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BuildingIcon({ className, dataTestid = "BuildingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Building data-testid={dataTestid} className={classes} {...rest} />
  );
}
