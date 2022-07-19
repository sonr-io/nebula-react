
import KeyboardOpen from "../../../assets/filled/KeyboardOpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeyboardOpenIcon({ className, dataTestid = "KeyboardOpenIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <KeyboardOpen data-testid={dataTestid} className={classes} {...rest} />
  );
}
