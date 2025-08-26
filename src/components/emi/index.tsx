import { useState, useEffect } from "react";

const Index = () => {
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [tenure, setTenure] = useState<string>("");
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const time = parseFloat(tenure) * 12; // Total months

    if (principal && rate && time) {
      const emiValue =
        (principal * rate * Math.pow(1 + rate, time)) /
        (Math.pow(1 + rate, time) - 1);
      const totalAmountValue = emiValue * time;
      const totalInterestValue = totalAmountValue - principal;

      setEmi(emiValue);
      setTotalAmount(totalAmountValue);
      setTotalInterest(totalInterestValue);
    } else {
      setEmi(0);
      setTotalAmount(0);
      setTotalInterest(0);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]); //eslint-disable-line

  const resetForm = () => {
    setLoanAmount("");
    setInterestRate("");
    setTenure("");
    setEmi(0);
    setTotalInterest(0);
    setTotalAmount(0);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen  p-4 font-sans">
      <div className="max-w-6xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="Enter loan amount"
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-medium bg-gray-50 transition-all duration-200 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Interest Rate (% per annum)
                </label>
                <input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="Enter interest rate"
                  step="0.01"
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-medium bg-gray-50 transition-all duration-200 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  Loan Tenure (Years)
                </label>
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                  placeholder="Enter loan tenure"
                  className="px-4 py-3 border-2 border-gray-200 rounded-lg text-base font-medium bg-gray-50 transition-all duration-200 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100 placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>

              <button
                onClick={resetForm}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm">
            <div className="h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Calculation Results
              </h2>

              <div className="flex flex-col space-y-4 mb-8">
                <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-2 text-white/90">
                    Monthly EMI
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    {formatCurrency(emi)}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-2 text-gray-600 opacity-80">
                    Total Interest
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-gray-800">
                    {formatCurrency(totalInterest)}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-2 text-gray-600 opacity-80">
                    Total Amount
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-gray-800">
                    {formatCurrency(totalAmount)}
                  </p>
                </div>
              </div>

              {emi > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-600 mb-4 text-center">
                    Payment Breakdown
                  </h3>
                  <div className="mb-4">
                    <div className="h-5 bg-gray-200 rounded-full overflow-hidden relative mb-4">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full relative"
                        style={{
                          width: `${
                            (parseFloat(loanAmount) / totalAmount) * 100
                          }%`,
                        }}
                      >
                        <div
                          className="absolute top-0 right-0 h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                          style={{
                            width: `${
                              (totalInterest / parseFloat(loanAmount)) * 100
                            }%`,
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
                      <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                        <span className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex-shrink-0" />
                        Principal: {formatCurrency(parseFloat(loanAmount))}
                      </span>
                      <span className="flex items-center gap-2 text-sm font-medium text-gray-600">
                        <span className="w-3 h-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex-shrink-0" />
                        Interest: {formatCurrency(totalInterest)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
