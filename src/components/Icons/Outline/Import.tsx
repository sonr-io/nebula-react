
import Import from "../../../assets/outline/Import.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ImportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Import data-testid="ImportIcon" className={classes} />
  );
}
