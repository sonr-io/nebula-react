
import Warning2 from "../../../assets/duotone/Warning2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Warning2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Warning2 data-testid="Warning2Icon" className={classes} />
  );
}
