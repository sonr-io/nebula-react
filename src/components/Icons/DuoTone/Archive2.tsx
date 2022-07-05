
import Archive2 from "../../../assets/duotone/Archive2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Archive2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Archive2 data-testid="Archive2Icon" className={classes} />
  );
}
