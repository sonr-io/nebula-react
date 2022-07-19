
import LanguageSquare from "../../../assets/outline/LanguageSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LanguageSquareIcon({ className, dataTestid = "LanguageSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LanguageSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
