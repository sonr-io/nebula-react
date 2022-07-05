
import Verify from "../../../assets/filled/Verify.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VerifyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Verify data-testid="VerifyIcon" className={classes} />
  );
}
