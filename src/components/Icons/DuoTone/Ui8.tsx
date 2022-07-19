
import Ui8 from "../../../assets/duotone/Ui8.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Ui8Icon({ className, dataTestid = "Ui8Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Ui8 data-testid={dataTestid} className={classes} {...rest} />
  );
}
