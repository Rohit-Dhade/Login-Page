import { FaRegSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Middlepart = () => {
    return (
        <form className="flex flex-col gap-4 mt-2">

            <div className="flex gap-2">
                <input
                    className="w-1/2 h-8 bg-[#3B354D] text-white rounded-sm text-xs pl-2 outline-none focus:ring-0"
                    placeholder="First Name"
                />
                <input
                    className="w-1/2 h-8 bg-[#3B354D] text-white rounded-sm text-xs pl-2 outline-none focus:ring-0"
                    placeholder="Last Name"
                />
            </div>

            <input
                className="w-full h-8 bg-[#3B354D] text-white rounded-sm text-xs pl-2 outline-none focus:ring-0"
                placeholder="Email"
            />

            <input
                type="password"
                className="w-full h-8 bg-[#3B354D] text-white rounded-sm text-xs pl-2 outline-none focus:ring-0"
                placeholder="Enter your password"
            />

            <label className="flex items-center gap-2 text-[10px] text-white">
                <input type="checkbox" className="accent-[#FF8AFF]" />
                I agree to the
                <a className="text-[#FF8AFF] underline ml-1" href="#">
                    Terms & Conditions
                </a>
            </label>

            <button
                type="submit"
                className="bg-[#6E54B5] h-8 text-white rounded-sm active:scale-95 transition"
            >
                Create Account
            </button>

            <div className="flex justify-between gap-2">
                <button className="flex items-center gap-2 px-6 py-1 border border-gray-500 rounded-sm text-white active:scale-95 transition">
                    <FcGoogle /> Google
                </button>
                <button className="flex items-center gap-2 px-6 py-1 border border-gray-500 rounded-sm text-white active:scale-95 transition">
                    <FaApple /> Apple
                </button>
            </div>

        </form>
    )
}

export default Middlepart
