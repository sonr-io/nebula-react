
import LanguageCircle from "../../../assets/filled/LanguageCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LanguageCircleIcon({ className, dataTestid = "LanguageCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LanguageCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
