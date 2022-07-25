
import Ranking1 from "../../../assets/duotone/Ranking1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Ranking1Icon({ className, dataTestid = "Ranking1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ranking1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
