
import Personalcard from "../../../assets/filled/Personalcard.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PersonalcardIcon({ className, dataTestid = "PersonalcardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Personalcard data-testid={dataTestid} className={classes} {...rest} />
  );
}
