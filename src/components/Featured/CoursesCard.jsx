import { Rate } from "antd"
import './card.css'
const CoursesCard = ({ item }) => {
    console.log(item);


    return (
        <div className="w-96 flex flex-col items-center rounded-xl shadow-black shadow-lg">
            <div className="w-full h-72 p-6">
                <img className="w-full h-full object-cover" src={item?.image} alt="" />
            </div>
            <div className="p-6">
                <h1 className="title">
                    {item?.title}
                </h1>
                <p className="text-sm text-neutral-500 my-2">
                    {item?.description}
                </p>
                <p>
                    <span className="text-xl font-semibold">Cost :</span> <span className="title">$ {item?.price}</span>
                </p>
                <Rate defaultValue={item?.ratings} allowHalf style={{color:"#41a96a"}} />
            </div>
        </div>
    );
};

export default CoursesCard;