import { useSelector } from 'react-redux';
import AnimatedWater from './animatedWater';

const MAX_FILL = 98;

const Glass = () => {
  const state = useSelector((state) => state);
  const { current, dailyGoal, previous } = state;

  const from = (previous / dailyGoal) * MAX_FILL;
  const to = (current / dailyGoal) * MAX_FILL;

  return (
    <div className="glass-position">
      <div className="glass">
        <div className="glass-inner">
          <AnimatedWater className="water" from={from} to={to}></AnimatedWater>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
};

export default Glass;
