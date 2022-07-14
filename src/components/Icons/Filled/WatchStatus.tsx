
import WatchStatus from "../../../assets/filled/WatchStatus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WatchStatusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <WatchStatus data-testid="WatchStatusIcon" className={classes} />
  );
}
