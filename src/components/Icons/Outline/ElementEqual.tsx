
import ElementEqual from "../../../assets/outline/ElementEqual.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ElementEqualIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ElementEqual data-testid="ElementEqualIcon" className={classes} />
  );
}
