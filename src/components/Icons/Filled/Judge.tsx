
import Judge from "../../../assets/filled/Judge.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function JudgeIcon({ className, dataTestid = "JudgeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Judge data-testid={dataTestid} className={classes} {...rest} />
  );
}
