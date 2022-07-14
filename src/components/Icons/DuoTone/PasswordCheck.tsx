
import PasswordCheck from "../../../assets/duotone/PasswordCheck.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PasswordCheckIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PasswordCheck} data-testid="PasswordCheckIcon" className={classes} />
  );
}
