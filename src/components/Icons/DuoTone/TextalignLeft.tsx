
import TextalignLeft from "../../../assets/duotone/TextalignLeft.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignLeftIcon({ className, dataTestid = "TextalignLeftIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TextalignLeft data-testid={dataTestid} className={classes} {...rest} />
  );
}
