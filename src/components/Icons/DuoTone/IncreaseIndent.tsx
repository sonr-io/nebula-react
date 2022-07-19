
import IncreaseIndent from "../../../assets/duotone/IncreaseIndent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function IncreaseIndentIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <IncreaseIndent data-testid="IncreaseIndentIcon" className={classes} />
  );
}
