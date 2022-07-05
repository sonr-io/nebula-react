
import Edit2 from "../../../assets/filled/Edit2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Edit2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Edit2 data-testid="Edit2Icon" className={classes} />
  );
}
