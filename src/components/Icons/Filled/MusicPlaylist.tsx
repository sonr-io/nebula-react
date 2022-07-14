
import MusicPlaylist from "../../../assets/filled/MusicPlaylist.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicPlaylistIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicPlaylist data-testid="MusicPlaylistIcon" className={classes} />
  );
}
