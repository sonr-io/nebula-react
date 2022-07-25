
import House2 from "../../../assets/filled/House2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function House2Icon({ className, dataTestid = "House2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <House2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
