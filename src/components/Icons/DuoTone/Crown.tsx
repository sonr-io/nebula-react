
import Crown from "../../../assets/duotone/Crown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CrownIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Crown data-testid="CrownIcon" className={classes} />
  );
}
