
import AlignHorizontally from "../../../assets/filled/AlignHorizontally.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignHorizontallyIcon({ className, dataTestid = "AlignHorizontallyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AlignHorizontally data-testid={dataTestid} className={classes} {...rest} />
  );
}
