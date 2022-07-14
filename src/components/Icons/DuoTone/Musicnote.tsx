
import Musicnote from "../../../assets/duotone/Musicnote.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicnoteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Musicnote data-testid="MusicnoteIcon" className={classes} />
  );
}
