
import CopySuccess from "../../../assets/outline/CopySuccess.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CopySuccessIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={CopySuccess} data-testid="CopySuccessIcon" className={classes} />
  );
}
