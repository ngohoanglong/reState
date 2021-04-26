import Sample from "./Sample";

const blocks = ["single", "mega"];
const createchildren = ({ label }, i) => {
  let item = {
    key: `${label}-${i}`,
    label: `${label}-${i}`,
  };
  return item;
};
const createmenusample = {
  single: {
    key: "single",
  },
  mega: {
    key: "mega",
  },
};
const MenuButton = () => (
  <button
    style={{ width: 21, height: 21 }}
    className="btn inline-flex justify-center items-center"
  >
    <div className="intro-menu"></div>
  </button>
);
export default function MenuGenerator1() {
  return (
    <div className="main-container p-2 md:p-3 lg:p-6">
      <div className="profile overflow-hidden">
        <div className="profile-avatar  pointer-events-none">
          <img src="/avatar.png" alt className="profile-img" />
          <div className="profile-name">Ngo Hoang Long</div>
        </div>
        <img
          src="https://cdn1.iconfinder.com/data/icons/cute-corgi-dog-emoticon/595/CUTE_CORGI_DOG_EMOTICON-06-512.png"
          alt
          className="profile-cover"
        />
        <div className="profile-menu overflow-auto justify-start">
          {blocks.map((item, i) =>
            i === 0 ? (
              <a
                href={"#" + item}
                key={item}
                className={"profile-menu-link active"}
              >
                {item}
              </a>
            ) : (
              <a key={item} href={"#" + item} className={"profile-menu-link"}>
                {item}
              </a>
            )
          )}
          <div
            style={{
              minWidth: "400px",
              background: "inherit",
            }}
            className="w-24 flex-1  flex-shrink-0 z-10"
          />
          <div
            style={{
              boxShadow: "rgb(27 134 249) -6px 0px 95px 19px",
            }}
            className="shadow-xl sticky right-0"
          ></div>
        </div>
      </div>
      {blocks.map((key) => (
        <div key={key} className="timeline">
          <div className="timeline-left">
            <div id={key} className="box intro box sticky top-0">
              <div className="intro-title flex items-baseline">
                {key}
                <div className="flex-1" />
                <MenuButton />
              </div>
              <div>
                {new Array(6)
                  .fill(createmenusample[key])
                  .map(({ label }, i) => createchildren({ label: key }, i))
                  .map(({ label, key }) => (
                    <div key={key} className="p-3">
                      {label}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-8 h-8" />
          <div className="timeline-right min-h-screen box intro">
            <Sample />
          </div>
        </div>
      ))}
    </div>
  );
}
