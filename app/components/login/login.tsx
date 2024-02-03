import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Login() {
    return (
        <div className="h-full flex items-center ">
            <div className="w-[58%] flex p-4">
                <div className="flex justify-center items-center w-full select-none ">
                    <h1 className="font-medium text-[31rem]">X</h1>
                </div>
            </div>
            <div className="flex-1 flex p-4">
                <div className="w-[300px] space-y-10">
                    <div className="font-extrabold space-y-10 tracking-wide ">
                        <h1 className="text-6xl whitespace-nowrap ">Happening now</h1>
                        <h2 className="text-3xl">Join today.</h2>
                    </div>
                    <div>
                        <div className="space-y-3">
                            <button className="inline-flex gap-2 items-center justify-center py-[0.4rem] bg-white text-black w-full rounded-full font-bold text-base">
                                <FcGoogle size={24} />
                                Sign In with Google
                            </button>
                            <button className="inline-flex gap-2 items-center justify-center py-[0.4rem] bg-white text-black w-full rounded-full font-bold">
                                <FaApple size={24} />
                                Sign In with Apple
                            </button>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-[1px] bg-neutral-600" />
                                or
                                <div className="flex-1 h-[1px] bg-neutral-600" />
                            </div>
                            <button className="py-[0.4rem] bg-sky-500 text-white w-full rounded-full font-bold">Create Account</button>
                            <p className="text-neutral-500 text-xs">
                                By signing up, you agree to the <span className="text-sky-500">Terms of Service</span> and <span className="text-sky-500">Privacy Policy</span>, including <span className="text-sky-500">Cookie Use</span>.
                            </p>
                        </div>
                        <div className="mt-12">
                            <div className="space-y-4">
                                <p className="text-bold text-neutral-50 font-bold">Already have an account?</p>
                                <button className="py-[0.4rem] border text-sky-500 border-neutral-500 w-full rounded-full font-bold hover:bg-sky-900/10 duration-200">Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
