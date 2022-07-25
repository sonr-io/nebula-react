
import TextalignJustifyright from "../../../assets/filled/TextalignJustifyright.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignJustifyrightIcon({ className, dataTestid = "TextalignJustifyrightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TextalignJustifyright data-testid={dataTestid} className={classes} {...rest} />
  );
}
