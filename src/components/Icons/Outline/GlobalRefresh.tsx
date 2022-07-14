
import GlobalRefresh from "../../../assets/outline/GlobalRefresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GlobalRefreshIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <GlobalRefresh data-testid="GlobalRefreshIcon" className={classes} />
  );
}
