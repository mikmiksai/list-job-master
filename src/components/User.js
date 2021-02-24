import Tags from "./Tags";

const User = ({ user, onFilter }) => {
  return (
    <div className={`card user ${user.featured ? " border-cyan" : null}`}>
      <div className="user__content">
        <div className='company-logo__wrapper'>
          <img
            src={require(`../images/${user.logo}`).default}
            alt={user.logo.substr(0, user.logo.lastIndexOf(".")) || user.logo}
            className="company-logo"
          />
        </div>
        <div>
          <div className="company-infos">
            <div className="company-name">{user.company}</div>
            {user.new === true ? (
              <div className="company-new">
                <span>NEW!</span>
              </div>
            ) : null}
            {user.featured === true ? (
              <div className="company-featured">
                <span>FEATURED</span>
              </div>
            ) : null}
          </div>
          <div className="position">{user.position}</div>
          <div className="other-desc">
            <div>{user.postedAt}</div>
            <span className="bullet"></span>
            <div>{user.contract}</div>
            <span className="bullet"></span>
            <div>{user.location}</div>
          </div>
        </div>
      </div>
      <Tags user={user} onFilter={onFilter} />
    </div>
  );
};

export default User;
