
import Snapchat from "../../../assets/duotone/Snapchat.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SnapchatIcon({ className, dataTestid = "SnapchatIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Snapchat data-testid={dataTestid} className={classes} {...rest} />
  );
}
