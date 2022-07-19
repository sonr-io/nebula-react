
import MusicFilter from "../../../assets/filled/MusicFilter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicFilterIcon({ className, dataTestid = "MusicFilterIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicFilter data-testid={dataTestid} className={classes} {...rest} />
  );
}
