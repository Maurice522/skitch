import NewNav from "./Navbar/NewNav";

export default function Layout({children}) {
    return(
        <div>
            <NewNav />
            <div>{children}</div>
        </div>
    )
}