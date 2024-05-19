import image1 from "../assets/Images/image-01.jpeg";
import image2 from "../assets/Images/image-02.jpeg";
import image3 from "../assets/Images/image-03.jpeg";
import image4 from "../assets/Images/image-04.jpeg";
import image5 from "../assets/Images/image-05.jpeg";
import image6 from "../assets/Images/image-06.jpeg";
import Button from "./Button";

function EmailSendCom() {
  return (
    <div className="container mx-auto slg:px-14 font-inter">
      <div className=" flex justify-between bg-blue-700 rounded-xl items-center pt-10 pb-20 slg:px-8 gap-4">
        <div className="w-fit hidden flex-col gap-2 slg:flex">
          <div className="flex gap-2 w-[100%]">
            <div className="w-[100%] flex justify-center items-center">
              <img
                src={image1}
                alt=""
                className="w-[100%] rounded-md animate-Tup"
              />
            </div>
            <div className="w-[100%]">
              <img src={image2} alt="" className=" rounded-md animate-Tright" />
            </div>
          </div>
          <div className="w-[100%]">
            <img
              src={image3}
              alt=""
              className="w-[50%] rounded-md animate-Tup"
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 px-8">
          <div className="text-4xl font-bold text-center text-white flex justify-center">
            New Things Will Always Update Regularly
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="w-full py-3 px-3 border rounded-md"
              />
            </div>
            <div>
              <Button
                text={"Subcribe"}
                className={
                  "px-4 py-3 w-fit text-white font-inter bg-orange-500"
                }
              />
            </div>
          </div>
        </div>
        <div className="w-fit hidden flex-col gap-2 slg:flex">
          <div className="flex gap-2 w-[100%]">
            <div className="w-[100%] flex justify-center">
              <img
                src={image6}
                alt=""
                className="w-[90%] rounded-md object-contain animate-Tright"
              />
            </div>
            <div className="w-[100%] flex justify-center items-center">
              <img src={image5} alt="" className=" rounded-md animate-Tup" />
            </div>
          </div>
          <div className="w-[100%]">
            <img
              src={image4}
              alt=""
              className="w-[50%] rounded-md animate-Tup"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailSendCom;
