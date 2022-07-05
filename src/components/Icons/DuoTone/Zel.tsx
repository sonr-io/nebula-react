
import Zel from "../../../assets/duotone/Zel.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ZelIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Zel data-testid="ZelIcon" className={classes} />
  );
}
