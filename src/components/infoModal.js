import 'react-confirm-alert/src/react-confirm-alert.css';

const InfoModal = (props) => {
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
          <p className="text-md font-bold">
            Keeping hydrated is crucial for health and well-being:
          </p>
          <ul>
            <li>- Water Lubricates the joints</li>
            <li>- Delivers oxygen throughout the body</li>
            <li>- Boosts skin health and beauty</li>
            <li>
              - It cushions the brain, spinal cord, and other sensitive tissues
            </li>
            <li>- It makes minerals and nutrients accessible</li>
            <li>- It flushes body waste</li>
          </ul>
          <p className="text-right">Source: Medical News Today</p>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
