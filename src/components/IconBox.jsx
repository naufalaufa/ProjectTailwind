import { DataBoxTechStackIcon } from "../Data/DataBoxTechStack";
const IconBox = () => {
  return (
    <div className="flex justify-center mt-5 flex-wrap gap-4">
      {DataBoxTechStackIcon.map((item) => {
        const { id, icon, style } = item;
        return (
          <span key={id} className={style}>
            {icon}
          </span>
        );
      })}
    </div>
  );
};

export default IconBox;
