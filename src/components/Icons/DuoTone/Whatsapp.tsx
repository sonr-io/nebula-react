
import Whatsapp from "../../../assets/duotone/Whatsapp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WhatsappIcon({ className, dataTestid = "WhatsappIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Whatsapp data-testid={dataTestid} className={classes} {...rest} />
  );
}
