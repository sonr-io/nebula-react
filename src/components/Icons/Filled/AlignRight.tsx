
import AlignRight from "../../../assets/filled/AlignRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignRightIcon({ className, dataTestid = "AlignRightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AlignRight data-testid={dataTestid} className={classes} {...rest} />
  );
}
