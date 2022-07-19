
import Save2 from "../../../assets/filled/Save2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Save2Icon({ className, dataTestid = "Save2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Save2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
