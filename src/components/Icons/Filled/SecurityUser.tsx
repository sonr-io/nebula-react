
import SecurityUser from "../../../assets/filled/SecurityUser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SecurityUserIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SecurityUser data-testid="SecurityUserIcon" className={classes} />
  );
}
