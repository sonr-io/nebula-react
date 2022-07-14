
import Ranking from "../../../assets/duotone/Ranking.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RankingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Ranking} data-testid="RankingIcon" className={classes} />
  );
}
