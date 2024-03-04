import Link from "next/link";

export default function NotSignedInMessage() {
    return (
        <div className="py-8 px-8 border-b border-x border-neutral-700 space-y-4">
            <h1 className="text-2xl font-bold">You are currently not signed in 🥹</h1>
            <p className="text-neutral-500">
                You are not currently signed in. Which means your account is read-only mode. Please sign in to be able to create posts.
                <Link className="text-sky-500" href="/login">
                    login page
                </Link>
                .
            </p>
        </div>
    );
}
