
import Sound from "../../../assets/duotone/Sound.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SoundIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Sound} data-testid="SoundIcon" className={classes} />
  );
}
