
import Level from "../../../assets/filled/Level.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LevelIcon({ className, dataTestid = "LevelIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Level data-testid={dataTestid} className={classes} {...rest} />
  );
}
