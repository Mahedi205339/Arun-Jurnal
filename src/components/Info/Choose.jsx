import Title from "../Title/Title";
import choseImage from '../../assets/imgDisenioWebMedida.ceefbcdb.svg'
const Choose = () => {
    return (
        <div className="min-h-screen py-7 max-w-[1500px] mx-auto">
            <div className="">
                <Title
                    headline={"Why you choose us?"}
                    subHeadline="Join Our Exclusive Online Course for Aspiring Journalists"
                ></Title>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center my-10">
                <div className="flex-1">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi libero repellendus non nesciunt similique, ut adipisci doloremque voluptatem iste. Esse facilis ipsa repellendus odio minima aut, rerum fugit voluptatem.
                        <br />

                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi libero repellendus non nesciunt similique, ut adipisci doloremque voluptatem iste. Esse facilis
                        <br /> ipsa repellendus odio minima aut, rerum fugit voluptatem.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi libero repellendus  <br /> non nesciunt similique, ut adipisci doloremque voluptatem iste. Esse facilis ipsa repellendus odio minima aut, rerum fugit voluptatem.
                    </p>
                </div>
                <div className="flex-1">
                    <img src={choseImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Choose;