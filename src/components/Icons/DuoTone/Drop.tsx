
import Drop from "../../../assets/duotone/Drop.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DropIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Drop data-testid="DropIcon" className={classes} />
  );
}
