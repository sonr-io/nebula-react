
import Microphone2 from "../../../assets/duotone/Microphone2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Microphone2Icon({ className, dataTestid = "Microphone2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Microphone2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
