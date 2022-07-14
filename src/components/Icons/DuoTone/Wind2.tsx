
import Wind2 from "../../../assets/duotone/Wind2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Wind2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Wind2 data-testid="Wind2Icon" className={classes} />
  );
}
