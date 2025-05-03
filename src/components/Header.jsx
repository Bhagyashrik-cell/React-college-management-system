function Header() {
  return (
    <header
      style={{
        backgroundColor: "#003366",
        color: "white",
        padding: "10px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/mgmlogo.png"
        alt="MGM Logo"
        style={{
          height: "60px",
          width: "60px",
          borderRadius: "8px",
          marginBottom: "5px",
        }}
      />
      <h1 style={{ margin: 0 }}>MGM JNEC</h1>
    </header>
  );
}

export default Header;
