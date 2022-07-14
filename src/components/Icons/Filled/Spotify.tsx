
import Spotify from "../../../assets/filled/Spotify.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SpotifyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Spotify} data-testid="SpotifyIcon" className={classes} />
  );
}
