import Header from "components/Header";
import PageContainer from "components/PageContainer";
import localFont from "@next/font/local";
const myCustomFont = localFont({ src: "../public/fonts/Cosmetic-Thin.otf" });

function Home() {
  return (
    <div lang="en" className={myCustomFont.className}>
      <PageContainer>
        <Header title={"Letícia Novak"} />
      </PageContainer>
    </div>
  );
}

export default Home;
