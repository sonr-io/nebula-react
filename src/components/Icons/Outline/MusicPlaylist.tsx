
import MusicPlaylist from "../../../assets/outline/MusicPlaylist.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicPlaylistIcon({ className, dataTestid = "MusicPlaylistIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MusicPlaylist data-testid={dataTestid} className={classes} {...rest} />
  );
}
