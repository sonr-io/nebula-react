
import FavoriteChart from "../../../assets/duotone/FavoriteChart.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FavoriteChartIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FavoriteChart} data-testid="FavoriteChartIcon" className={classes} />
  );
}
