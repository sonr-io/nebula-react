
import Trello from "../../../assets/outline/Trello.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrelloIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Trello} data-testid="TrelloIcon" className={classes} />
  );
}
