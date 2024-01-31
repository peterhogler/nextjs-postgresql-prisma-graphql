import ListDeleteButton from "./list-delete-button";

export default function List({ users }: { users: any }) {
    console.log(users);
    return (
        <div className="space-y-2">
            {users.map((user: any) => {
                return (
                    <div key={user.id} className="inline-flex items-center justify-between border px-2 py-1 gap-2">
                        {user.email}
                        <ListDeleteButton userId={user.id} />
                    </div>
                );
            })}
        </div>
    );
}
