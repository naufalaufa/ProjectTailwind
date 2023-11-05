import meee from "../assets/me.jpg";
import anonymous from "../assets/anonymous.jpg";

const ChatBuble = () => {
  return (
    <div className="flex justify-center mt-20 sm:mt-64 md:mt-[300px] lg:mt-[300px] xl:mt-5">
      <div className="w-full h-full max-w-[1000px] m-auto mt-[700px] ">
        <div className="chat chat-start " data-aos="fade-up">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={meee} className="object-contain bg-center" />
            </div>
          </div>
          <div className="chat-header">
            Naufal Aufa
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble text-sm">
            I think too much about what people say
          </div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div
          className="chat chat-end"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={anonymous} />
            </div>
          </div>
          <div className="chat-header mt-5">
            Anonymous
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble text-sm">Hi pal</div>
          <div className="chat-bubble text-sm">
            Life is too short to think about what other people say
          </div>
          <div className="chat-bubble text-sm mt-2">
            do your best, YOU CAN DO IT!
          </div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
        <div
          className="chat chat-start"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src={meee} alt="error" />
            </div>
          </div>
          <div className="chat-header mt-10">
            Naufal Aufa
            <time className="text-xs opacity-50">12:48</time>
          </div>
          <div className="chat-bubble text-sm">SURE!, let`s do it</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
      </div>
    </div>
  );
};

export default ChatBuble;
