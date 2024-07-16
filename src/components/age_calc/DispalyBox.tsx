type Props = {
  age: [string, string, string];
};
const DisplayBox = ({ age }: Props) => {
  return (
    <>
      <h1 className="text-xl font-semibold border-b p-1">Age</h1>
      <div className="flex gap-5 my-3 capitalize">
        {["days", "months", "years"].map((item: string, idx: number) => (
          <p key={idx} className="flex gap-1 ">
            <span className="font-bold">{item}</span>
            {age[idx]}
          </p>
        ))}
      </div>
    </>
  );
};

export default DisplayBox;
