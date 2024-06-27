import React from 'react';

const Calculator = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6 w-64">
        <div className="bg-gray-200 p-2 mb-4 text-right text-2xl rounded">
          0
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
            <button
              key={btn}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {btn}
            </button>
          ))}
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded col-span-4"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;