const Input = ({ label, value, error, change, type }) => {
    return (
        <>
            <label
                className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                htmlFor={label}
            >
                {label}
            </label>
            <input
                className={`appearance-none block w-full bg-slate-50 text-gray-700 border  ${
                    error ? "border-red-500" : "border-slate-300"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-900`}
                id={label}
                type={type ?? "text"}
                value={value}
                placeholder="Please enter street"
                onChange={change}
            />
            {error && <p className="text-xs italic text-red-500">{error}</p>}
        </>
    );
};

export default Input;
