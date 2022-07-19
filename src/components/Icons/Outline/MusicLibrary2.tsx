
import MusicLibrary2 from "../../../assets/outline/MusicLibrary2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicLibrary2Icon({ className, dataTestid = "MusicLibrary2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicLibrary2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
