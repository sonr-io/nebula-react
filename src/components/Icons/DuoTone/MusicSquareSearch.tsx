
import MusicSquareSearch from "../../../assets/duotone/MusicSquareSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicSquareSearchIcon({ className, dataTestid = "MusicSquareSearchIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicSquareSearch data-testid={dataTestid} className={classes} {...rest} />
  );
}
