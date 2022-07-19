
import RepeateOne from "../../../assets/duotone/RepeateOne.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RepeateOneIcon({ className, dataTestid = "RepeateOneIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RepeateOne data-testid={dataTestid} className={classes} {...rest} />
  );
}
