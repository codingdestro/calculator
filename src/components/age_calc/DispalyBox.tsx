type Props = {
  age: [string, string, string];
};

const DisplayBox = ({ age }: Props) => {
  const [days, months, years] = age;
  
  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-100">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Your Age
        </h2>
      </div>
      
      {/* Age Display Grid */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-green-200">
            <div className="text-2xl sm:text-3xl font-bold text-green-600">{years}</div>
            <div className="text-sm text-gray-600 font-medium">
              Year{parseInt(years) !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-green-200">
            <div className="text-2xl sm:text-3xl font-bold text-teal-600">{months}</div>
            <div className="text-sm text-gray-600 font-medium">
              Month{parseInt(months) !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-green-200">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600">{days}</div>
            <div className="text-sm text-gray-600 font-medium">
              Day{parseInt(days) !== 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      {/* Summary Text */}
      <div className="text-center text-gray-700">
        <p className="text-sm">
          You are <span className="font-semibold text-green-600">{years}</span> years,{' '}
          <span className="font-semibold text-teal-600">{months}</span> months, and{' '}
          <span className="font-semibold text-emerald-600">{days}</span> days old.
        </p>
      </div>
    </div>
  );
};

export default DisplayBox;
