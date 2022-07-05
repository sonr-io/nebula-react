
import Add from "../../../assets/duotone/Add.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Add data-testid="AddIcon" className={classes} />
  );
}
