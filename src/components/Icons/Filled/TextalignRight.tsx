
import TextalignRight from "../../../assets/filled/TextalignRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TextalignRightIcon({ className, dataTestid = "TextalignRightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TextalignRight data-testid={dataTestid} className={classes} {...rest} />
  );
}
