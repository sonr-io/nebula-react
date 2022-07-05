
import Frame8 from "../../../assets/duotone/Frame8.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Frame8Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Frame8 data-testid="Frame8Icon" className={classes} />
  );
}
