
import Refresh from "../../../assets/filled/Refresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RefreshIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Refresh data-testid="RefreshIcon" className={classes} />
  );
}
