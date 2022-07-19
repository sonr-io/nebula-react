
import DirectboxSend from "../../../assets/outline/DirectboxSend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectboxSendIcon({ className, dataTestid = "DirectboxSendIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectboxSend data-testid={dataTestid} className={classes} {...rest} />
  );
}
