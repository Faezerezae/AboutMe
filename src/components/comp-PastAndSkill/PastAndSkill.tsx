import Skill from './Skill';
import Past from './Past';
import { pasts, whiths } from '../../data/data';



export default function PastAndSkill() {
  return (
    <div className="bg-gradient-to-r from-[#766EFF] to-[#87F1FF] h-[400px] xl:mb-60 mb-[1200px] sm:mb-[700px]">
      <section className="mx-auto p-2 sm:px-3 lg:px-5 ">
        <div className="grid grid-cols-1 xl:grid-cols-2 p-4 gap-32 bg-white rounded-md shadow-xl h-auto">
          <div className=" mx-auto gap-5 grid">
            <h1 className="font-bold text-5xl">ABOUT MYSELF</h1>
            <p className="text-gray-600 text-justify">
              My interest in front-end programming and my choice of React is due to its ease of use, strong community, strong ecosystem, and use in large enterprises. React is a powerful framework for developing professional user interfaces, and with JavaScript skills, you can get started quickly. Also, with an active community and plenty of educational resources, there's always room to learn and update.      </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center justify-items-center">
              {pasts.map((past) => (
                <Past key={past.id} pastData={past} />
              )
              )}
            </div>
          </div>
          <div className="lg:m-10 md:mx-40 m-10 mx-auto grid gap-1">
            <div className="grid gap-2">
              {whiths.map((whith) => (
                <Skill key={whith.id} skillData={whith} />
              )
              )}
            </div>

          </div>
        </div>
      </section>
      </div>
  )
}


//علاقه من به برنامه نویسی فرانت اند و انتخاب من برای React به دلیل سادگی استفاده، جامعه قدرتمند، اکوسیستم قدرتمند و استفاده در شرکت‌های بزرگ است. React یک فریمورک قوی برای توسعه رابط‌های کاربری حرفه‌ای است و با داشتن مهارت‌های جاوااسکریپت، می‌توان به سرعت شروع به کار کرد. همچنین، با وجود جامعه فعال و منابع آموزشی فراوان، همیشه امکان یادگیری و به‌روزرسانی در دسترس است.