
import Slack from "../../../assets/filled/Slack.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SlackIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Slack} data-testid="SlackIcon" className={classes} />
  );
}
