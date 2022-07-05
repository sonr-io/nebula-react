
import Path2 from "../../../assets/filled/Path2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Path2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Path2 data-testid="Path2Icon" className={classes} />
  );
}
