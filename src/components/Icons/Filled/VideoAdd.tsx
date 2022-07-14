
import VideoAdd from "../../../assets/filled/VideoAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VideoAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={VideoAdd} data-testid="VideoAddIcon" className={classes} />
  );
}
