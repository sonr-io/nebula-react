
import TextalignJustifyleft from "../../../assets/duotone/TextalignJustifyleft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignJustifyleftIcon({ className, dataTestid = "TextalignJustifyleftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TextalignJustifyleft data-testid={dataTestid} className={classes} {...rest} />
  );
}
