
import Bootstrap from "../../../assets/duotone/Bootstrap.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BootstrapIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bootstrap data-testid="BootstrapIcon" className={classes} />
  );
}
