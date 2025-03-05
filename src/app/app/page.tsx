import { auth } from "@/services/auth";

export default async function Page() {
    const session = await auth();
    return (
        <main>
            <div>
                <h1>{session?.user?.email}</h1>
            </div>
        </main>

    )

}
