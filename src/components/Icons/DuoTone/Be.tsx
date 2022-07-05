
import Be from "../../../assets/duotone/Be.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Be data-testid="BeIcon" className={classes} />
  );
}
