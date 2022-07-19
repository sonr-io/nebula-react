
import Activity from "../../../assets/outline/Activity.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ActivityIcon({ className, dataTestid = "ActivityIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Activity data-testid={dataTestid} className={classes} {...rest} />
  );
}
