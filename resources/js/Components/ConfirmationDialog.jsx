import { RxCross1 } from "react-icons/rx";
import { IoCheckmarkDone } from "react-icons/io5";

const ConfirmationDialog = ({ message, isOpen, yesAction, noAction }) => {
    return (
        <>
            {isOpen && (
                <div className=" absolute w-full h-full top-0 right-0 bg-black bg-opacity-90 flex justify-center items-center">
                    <div className="bg-white border rounded-lg py-4 px-2 w-4/6 md:w-2/6 mx-auto align-middle">
                        <p
                            className="text-center text-slate-900"
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                        <div className="w-2/3 mx-auto  flex flex-row justify-center items-center gap-4 mt-4">
                            <button
                                className="py-2 px-8 border border-slate-300 rounded-lg flex flex-row gap-2"
                                onClick={yesAction}
                            >
                                <IoCheckmarkDone className="text-2xl text-green-700" />
                                <span className="text-sm">Yes</span>
                            </button>
                            <button
                                className="py-2 px-8 border border-slate-300 rounded-lg flex flex-row gap-2"
                                onClick={noAction}
                            >
                                <RxCross1 className="text-2xl text-red-700" />
                                <span className="text-sm">No</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ConfirmationDialog;
