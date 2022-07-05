
import Frame1 from "../../../assets/filled/Frame1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Frame1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame1 data-testid="Frame1Icon" className={classes} />
  );
}
