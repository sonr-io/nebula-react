
import VolumeSlash from "../../../assets/filled/VolumeSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VolumeSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VolumeSlash} data-testid="VolumeSlashIcon" className={classes} />
  );
}
