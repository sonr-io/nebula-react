
import CopySuccess from "../../../assets/outline/CopySuccess.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CopySuccessIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CopySuccess data-testid="CopySuccessIcon" className={classes} />
  );
}
