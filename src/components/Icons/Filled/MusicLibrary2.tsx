
import MusicLibrary2 from "../../../assets/filled/MusicLibrary2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MusicLibrary2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicLibrary2 data-testid="MusicLibrary2Icon" className={classes} />
  );
}
