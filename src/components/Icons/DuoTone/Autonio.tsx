
import Autonio from "../../../assets/duotone/Autonio.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AutonioIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Autonio data-testid="AutonioIcon" className={classes} />
  );
}
