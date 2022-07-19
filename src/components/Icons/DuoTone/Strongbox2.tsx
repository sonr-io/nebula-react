
import Strongbox2 from "../../../assets/duotone/Strongbox2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Strongbox2Icon({ className, dataTestid = "Strongbox2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Strongbox2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
