
import Glass from "../../../assets/filled/Glass.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GlassIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Glass data-testid="GlassIcon" className={classes} />
  );
}
