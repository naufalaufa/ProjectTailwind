import meee from "../../assets/meee.jpg";
import anonymous from "../../assets/anonymous.jpg";
import { TypeAnimation } from "react-type-animation";

const ChatBuble = () => {
  const days = new Date();
  const getTimeHours = days.getHours().toLocaleString();
  const getTimeMinute = days.getMinutes().toLocaleString();
  const concatedTimesStrings = getTimeHours.concat(":", getTimeMinute);

  return (
    <div className="flex justify-center mt-20 sm:mt-64 md:mt-[300px] lg:mt-[300px] xl:mt-5">
      <div className="w-full h-full max-w-[1000px] m-auto mt-[700px] ">
        <div className="chat chat-start " data-aos="fade-up">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={meee} alt={meee} className="object-contain bg-center" />
            </div>
          </div>
          <div className="chat-header">
            Naufal Aufa
            <time className="text-xs opacity-50">{concatedTimesStrings}</time>
          </div>
          <div className="chat-bubble text-sm 2xl:text-xl">
            <TypeAnimation
              sequence={["I think too much about what people say"]}
              speed={200}
            />
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div
          className="chat chat-end"
          data-aos="fade-down"
          data-aos-delay="250"
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={anonymous} alt={anonymous} />
            </div>
          </div>
          <div className="chat-header mt-5">
            Anonymous
            <time className="text-xs opacity-50"> {concatedTimesStrings}</time>
          </div>
          <div className="chat-bubble text-sm 2xl:text-xl">
            <TypeAnimation sequence={["Hi Naufal"]} speed={400} />
          </div>
          <div className="chat-bubble text-sm 2xl:text-xl">
            <TypeAnimation
              sequence={[
                "Life is too short to think about what other people say",
              ]}
              speed={200}
            />
          </div>
          <div className="chat-bubble text-sm mt-2 2xl:text-xl">
            <TypeAnimation
              sequence={["Do your best, what you can"]}
              speed={50}
            />
          </div>
          <div className="chat-footer opacity-50">
            Seen at {concatedTimesStrings}
          </div>
        </div>
        <div
          className="chat chat-start"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={meee} alt={meee} />
            </div>
          </div>
          <div className="chat-header mt-10">
            Naufal Aufa
            <time className="text-xs opacity-50"> {concatedTimesStrings}</time>
          </div>
          <div className="chat-bubble text-sm 2xl:text-xl">
            <TypeAnimation sequence={["SURE!, lets ` do it"]} />
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBuble;
