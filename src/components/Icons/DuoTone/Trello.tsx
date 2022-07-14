
import Trello from "../../../assets/duotone/Trello.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrelloIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Trello data-testid="TrelloIcon" className={classes} />
  );
}
