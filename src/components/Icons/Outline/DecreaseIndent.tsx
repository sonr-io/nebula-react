
import DecreaseIndent from "../../../assets/outline/DecreaseIndent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DecreaseIndentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DecreaseIndent data-testid="DecreaseIndentIcon" className={classes} />
  );
}
