
import Setting2 from "../../../assets/duotone/Setting2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Setting2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Setting2 data-testid="Setting2Icon" className={classes} />
  );
}
