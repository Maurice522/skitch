import OrderDetails from "../components/cartComponent/OrderDetails";
import UserDetails from "../components/cartComponent/UserDetails";


export default function Cart() {
    return (
        <div className="flex md:p-4 flex-row bg-[#EDE7DB] items-start justify-center gap-4 max-md:flex-col-reverse max-md:items-center">
            <UserDetails />
            <OrderDetails />
        </div>
    )
}