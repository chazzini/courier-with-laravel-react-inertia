const Input = ({ label, value, error, change, type }) => {
    return (
        <>
            <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
            >
                {label}
            </label>
            <input
                className={`appearance-none block w-full bg-slate-50 text-gray-700 border  ${
                    error ? "border-red-500" : "border-slate-300"
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-slate-900`}
                id="grid-first-name"
                type={type ?? "text"}
                value={value}
                placeholder="Please enter street"
                onChange={change}
            />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </>
    );
};

export default Input;
