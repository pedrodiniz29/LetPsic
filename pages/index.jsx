import Header from "components/Header";
import localFont from "@next/font/local";
const myCustomFont = localFont({ src: "../public/fonts/Cosmetic-Thin.otf" });

function Home() {
  return (
    <div lang="en" className={myCustomFont.className}>
      <Header title={"Let Psic"} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
          minHeight: "100dvh",
        }}
      >
        <div style={{ alignContent: "center", paddingRight: "50px" }}>
          <h1>Em breve,</h1>
          <h2>Um novo espaço para cuidar de você.</h2>
        </div>
        <span
          style={{ backgroundColor: "#678C99", height: 300, width: "2px" }}
        />
        <img
          src="https://psicologaleticiapratesnovak.my.canva.site/portifolio/_assets/media/26f878289b10eac637ddb49012610a62.png"
          style={{ width: 400 }}
        />
      </div>
    </div>
  );
}

export default Home;
