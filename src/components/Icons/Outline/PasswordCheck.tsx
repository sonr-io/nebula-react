
import PasswordCheck from "../../../assets/outline/PasswordCheck.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PasswordCheckIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PasswordCheck data-testid="PasswordCheckIcon" className={classes} />
  );
}
