
import DirectboxDefault from "../../../assets/filled/DirectboxDefault.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectboxDefaultIcon({ className, dataTestid = "DirectboxDefaultIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectboxDefault data-testid={dataTestid} className={classes} {...rest} />
  );
}
