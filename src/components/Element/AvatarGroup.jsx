import PropTypes from "prop-types";

const AvatarGroup = ({ Me, Meee, cibereum, akoh }) => {
  return (
    <>
      <div className="avatar">
        <div className="w-12">
          <img src={Me} alt="error" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src={Meee} alt="error" />
        </div>
      </div>
      <div className="avatar">
        <div className="w-12">
          <img src={cibereum} alt="error" />
        </div>
      </div>
      <div className="avatar placeholder">
        <div className="w-12 bg-neutral-focus text-neutral-content">
          <img src={akoh} alt="error" />
        </div>
      </div>
    </>
  );
};

AvatarGroup.propTypes = {
  Me: PropTypes.any,
  Meee: PropTypes.any,
  cibereum: PropTypes.any,
  akoh: PropTypes.any,
};

export default AvatarGroup;
