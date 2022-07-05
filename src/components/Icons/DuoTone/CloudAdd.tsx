
import CloudAdd from "../../../assets/duotone/CloudAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CloudAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloudAdd data-testid="CloudAddIcon" className={classes} />
  );
}
