
import Simcard from "../../../assets/filled/Simcard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SimcardIcon({ className, dataTestid = "SimcardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Simcard data-testid={dataTestid} className={classes} {...rest} />
  );
}
