import { useNavigate } from "react-router-dom"
import data from "../data/diningData";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";

export default function Restaurant() {

    const navigate = useNavigate();

    function page2() {
        navigate('/restaurant2')
    }

    return (
        <div id="dining" className="flex flex-col mt-2 md:m-8">
            <SearchBar />
            <Filters />
            <div className="flex flex-col items-center gap-4 mt-2 md:grid md:max-lg:grid-cols-2 2xl:grid-cols-4 md:grid-cols-3 md:gap-12 lg:max-xl:grid-cols-3 lg:max-xl:gap-4">
                <span className="text-base font-normal md:hidden font-nav leading-[24px]">Restaurants</span>
                {
                    data.map((details) => {
                        return (
                            <button key={details.id} onClick={page2}>
                                <div className="flex bg-black flex-col gap-0 w-[343px] h-[240px] rounded-2xl">
                                    <div className="bg-cafe1 rounded-t-2xl bg-cover w-[343px] h-[240px] bg-no-repeat"></div>
                                    <div className="p-3">
                                        <div className="flex flex-row">
                                            <div className="flex flex-col text-white">
                                                <span className="font-nav font-semibold text-xl leading-[30px]">{details.name}</span>
                                                <div className="text-left">
                                                    <span className="font-nav font-medium text-[10px] leading-[15px]">{details.type}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row bg-white items-center w-[43px] h-[17px] gap-1 rounded-[4px] ml-auto border-[#F59428] border border-solid">
                                                <img src="Star.png" alt="star" className="w-4" />
                                                <span>{details.stars}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row text-white">
                                            <span>{details.address}</span>
                                            <div className="flex flex-row ml-auto">
                                                <img src="Clock.png" alt="Clock" />
                                                <span className="font-medium leading-[21px] w-16 ml-auto text-sm font-nav">{details.distance}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}