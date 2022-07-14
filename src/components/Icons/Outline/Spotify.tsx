
import Spotify from "../../../assets/outline/Spotify.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SpotifyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Spotify data-testid="SpotifyIcon" className={classes} />
  );
}