
import Edit from "../../../assets/outline/Edit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Edit data-testid="EditIcon" className={classes} />
  );
}
