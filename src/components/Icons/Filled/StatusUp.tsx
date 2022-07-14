
import StatusUp from "../../../assets/filled/StatusUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StatusUpIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <StatusUp data-testid="StatusUpIcon" className={classes} />
  );
}
