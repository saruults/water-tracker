import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

const SettingsModal = (props) => {
  const state = useSelector((state) => state);
  const { dailyGoal, incrementSize } = state;
  const dispatch = useDispatch();
  const [goalInput, setGoalInput] = useState(dailyGoal);
  const [incrementSizeInput, setIncrementSizeInput] = useState(incrementSize);

  return (
    <div className="absolute top-0 left-0">
      <div
        className="w-screen h-screen bg-black bg-opacity-20"
        onClick={props.handleClose}
      >
        <div
          className="modal bg-white absolute max-w-lg rounded-xl p-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <svg
            className="w-6 h-6 ml-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={props.handleClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <p>Daily goal</p>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={goalInput}
            onInput={(e) => setGoalInput(e.target.value)}
          />
          <p>Increment size</p>
          <input
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={incrementSizeInput}
            onInput={(e) => setIncrementSizeInput(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                dispatch({
                  type: 'UPDATE_SETTINGS',
                  payload: { newGoal: goalInput, newSize: incrementSizeInput },
                });
                props.handleClose();
              }}
            >
              Save
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                confirmAlert({
                  title: 'Reset record count',
                  message: 'Are you sure to do this.',
                  buttons: [
                    {
                      label: 'Yes',
                      onClick: () =>
                        dispatch({
                          type: 'RESET_RECORD',
                        }),
                    },
                    {
                      label: 'No',
                    },
                  ],
                });
              }}
            >
              Reset record
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
