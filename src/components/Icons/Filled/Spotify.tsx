
import Spotify from "../../../assets/filled/Spotify.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SpotifyIcon({ className, dataTestid = "SpotifyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Spotify data-testid={dataTestid} className={classes} {...rest} />
  );
}
