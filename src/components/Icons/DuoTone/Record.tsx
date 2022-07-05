
import Record from "../../../assets/duotone/Record.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function RecordIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Record data-testid="RecordIcon" className={classes} />
  );
}
