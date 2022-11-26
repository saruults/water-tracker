import { useSelector } from 'react-redux';
import AnimatedWater from './animatedWater';
import Wave from 'react-wavify';
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
          <AnimatedWater className="water" from={from} to={to}>
            <div className="h-full w-full relative">
              <Wave
                className="absolute w-full h-full -top-3"
                fill="#a4dee5"
                paused={false}
                options={{
                  amplitude: 10,
                  speed: 0.25,
                  points: 4,
                }}
              />
            </div>
          </AnimatedWater>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </div>
  );
};

export default Glass;
