
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <hr className="text-black" />

      <div className="w-full" id="header_div">
        <p id="name">HINATA MOTODATE</p>
        <p id="name1">Portfolio</p>
      </div>

      <div id="work" >
        <p id="work_p">WORK</p>

        <div>
          <p id="work_p1">|　　HTML・CSS<span id="img_p">　(１年最終課題)</span></p>
          <div id="img">
            <Image src={"/img/image1.png"} alt="img" width={600} height={500} className="mb-28" />
            <Image src={"/img/image2.png"} alt="img" width={600} height={500} className="mb-28" />
            <Image src={"/img/image3.png"} alt="img" width={600} height={500} />
          </div>
        </div>
        <div>
          <p id="work_p1">|　　HTML・CSS<span id="img_p">　(１年共同開発)</span></p>
          <div id="img">
            <Image src={"/img/image4.png"} alt="img" width={600} height={500} className="mb-28" />
            <Image src={"/img/image5.png"} alt="img" width={600} height={500} className="mb-28" />
            <Image src={"/img/image6.png"} alt="img" width={600} height={500} className="mb-28" />
          </div>
        </div>
      </div>
      <br />

      <div id="about">
        <p id="about_p">ABOUT</p>
        <div id="about_div">
          <div id="about_img">
            <Image src={"/img/image7.png"} alt="img" width={200} height={500} />
          </div>
          <div id="about_p2">
            <p>所属：総合システム工学科２年</p>
            <p>名前：本舘陽太</p>
            <p>メールアドレス：h.motodate.sys23@morijyobi.ac.jp</p>
            <p>獲得資格：基本情報技術者試験、
              java検定3級、
              Linux技術者認定資格
            </p>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div >
  );
}
