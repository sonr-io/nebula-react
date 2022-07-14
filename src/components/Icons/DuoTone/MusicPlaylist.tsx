
import MusicPlaylist from "../../../assets/duotone/MusicPlaylist.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicPlaylistIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MusicPlaylist} data-testid="MusicPlaylistIcon" className={classes} />
  );
}
