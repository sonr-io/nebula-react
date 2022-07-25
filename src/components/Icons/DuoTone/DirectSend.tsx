
import DirectSend from "../../../assets/duotone/DirectSend.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectSendIcon({ className, dataTestid = "DirectSendIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectSend data-testid={dataTestid} className={classes} {...rest} />
  );
}
