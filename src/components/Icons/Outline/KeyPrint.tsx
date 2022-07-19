
import KeyPrint from "../../../assets/outline/KeyPrint.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeyPrintIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <KeyPrint data-testid="KeyPrintIcon" className={classes} />
  );
}
