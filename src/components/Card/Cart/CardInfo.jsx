import { DataInfo } from "../../../Data/DataInfo";

const cardElement = DataInfo.map((item) => {
  const { id, path, style, icons } = item;
  return (
    <a key={id} href={path} className={style}>
      <span>{icons}</span>
    </a>
  );
});

const CardInfo = () => {
  return <>{cardElement}</>;
};

export default CardInfo;
