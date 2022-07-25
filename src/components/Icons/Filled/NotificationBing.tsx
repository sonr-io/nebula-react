
import NotificationBing from "../../../assets/filled/NotificationBing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NotificationBingIcon({ className, dataTestid = "NotificationBingIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NotificationBing data-testid={dataTestid} className={classes} {...rest} />
  );
}
