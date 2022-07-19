
import Italic from "../../../assets/filled/Italic.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ItalicIcon({ className, dataTestid = "ItalicIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Italic data-testid={dataTestid} className={classes} {...rest} />
  );
}
