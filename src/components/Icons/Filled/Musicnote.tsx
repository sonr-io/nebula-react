
import Musicnote from "../../../assets/filled/Musicnote.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicnoteIcon({ className, dataTestid = "MusicnoteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Musicnote data-testid={dataTestid} className={classes} {...rest} />
  );
}
