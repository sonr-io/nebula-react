
import Building from "../../../assets/duotone/Building.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BuildingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Building} data-testid="BuildingIcon" className={classes} />
  );
}
