import LogOutBtn from "./LogOutBtn";

const Header = () => {
  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#646cff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
      }}
    >
      <div>Cloud storage</div>
      <LogOutBtn />
    </header>
  );
};

export default Header;
