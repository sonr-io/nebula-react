
import GlobalRefresh from "../../../assets/outline/GlobalRefresh.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GlobalRefreshIcon({ className, dataTestid = "GlobalRefreshIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GlobalRefresh data-testid={dataTestid} className={classes} {...rest} />
  );
}
