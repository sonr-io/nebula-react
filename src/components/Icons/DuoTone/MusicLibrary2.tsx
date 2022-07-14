
import MusicLibrary2 from "../../../assets/duotone/MusicLibrary2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicLibrary2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicLibrary2 data-testid="MusicLibrary2Icon" className={classes} />
  );
}
