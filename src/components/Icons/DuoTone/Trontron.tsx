
import Trontron from "../../../assets/duotone/Trontron.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TrontronIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Trontron data-testid="TrontronIcon" className={classes} />
  );
}
