import Link from "next/link"


export default async function Navigation() {

    return (
        <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10 dark:bg-white/5 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/5  backdrop-blur-lg transition-all">
            <aside className="flex items-center gap-2 bg-gradient-to-l from-primary to-violet-400 text-transparent bg-clip-text relative">
                <Link
                    href='/'
                    className='text-xl font-bold '>
                    <span>Quattron Kids</span>
                </Link>
            </aside>


            <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">

                <ul className="flex items-center justify-center gap-14">

                    <Link
                        href="/"
                        className="btn btn-ghost rounded-sm p-3 hover:bg-black/10">
                        Home
                    </Link>

                    <Link
                        href="/"
                        className="btn btn-ghost rounded-sm p-3 hover:bg-black/10">
                        Courses
                    </Link>

                    <Link
                        href="/"
                        className="btn btn-ghost rounded-sm p-3 hover:bg-black/10">
                        Full Courses
                    </Link>

                    <Link
                        href="/"
                        className="btn btn-ghost rounded-sm p-3 hover:bg-black/10">
                        Summer Camps
                    </Link>

                </ul>
            </nav>

            <div className="hidden md:block lg:block py-5">

                <aside className="flex gap-2 items-center">

                    
                </aside>
            </div>
        </div>
    )
}