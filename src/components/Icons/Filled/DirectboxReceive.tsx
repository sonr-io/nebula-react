
import DirectboxReceive from "../../../assets/filled/DirectboxReceive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectboxReceiveIcon({ className, dataTestid = "DirectboxReceiveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectboxReceive data-testid={dataTestid} className={classes} {...rest} />
  );
}
