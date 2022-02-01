import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">SHUTTER/UPP</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://www.instagram.com/p/CZY9GZoPpi4/?utm_medium=copy_link"
        alt=""
      />
    </div>
  );
}
