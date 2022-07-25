
import CodeCircle from "../../../assets/filled/CodeCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CodeCircleIcon({ className, dataTestid = "CodeCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CodeCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
