
import Building from "../../../assets/filled/Building.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BuildingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Building data-testid="BuildingIcon" className={classes} />
  );
}
