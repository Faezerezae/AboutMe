import React from 'react'
import { FaTelegramPlane, FaLinkedin, FaGithub } from 'react-icons/fa';
import { contact } from '../data/data';
import { SVGProps } from 'react';

const TelegramIcon = FaTelegramPlane as unknown as (props: SVGProps<SVGSVGElement>) => JSX.Element;
const LinkedinIcon = FaLinkedin as unknown as (props: SVGProps<SVGSVGElement>) => JSX.Element;
const GithubIcon = FaGithub as unknown as (props: SVGProps<SVGSVGElement>) => JSX.Element;

export default function About() {
  return (
    <div className="bg-gradient-to-r from-[#766EFF] to-[#87F1FF] h-[400px] mb-[700px] xl:mb-96">
      <section className="container mx-auto px-2 sm:px-3 lg:px-5">
        <div className="bg-white rounded-lg h-auto grid grid-cols-1 xl:grid-cols-2 shadow-lg p-4">
      <div className="lg:m-10 md:mx-40  m-10 mx-auto">
        <img src={process.env.PUBLIC_URL + '/profile.png'} className="w-[500px] h-auto mx-auto rounded-lg" alt="profile" />
      </div>
      <div className="lg:m-10 md:mx-40 m-10 mx-auto grid gap-1">
        <p className="">HELLO EVERYBODY, I AM</p>
        <h1 className="font-bold text-5xl">FAEZE REZAEE</h1>
        <p>FrontEnd Developer</p>
        <p className="text-gray-600">I am a web developer, I have completed a course at Maktab Sharif Institute and I am fluent in JavaScript, Frontend and React.        </p>
        <div className="py-4 grid gap-2">
          {contact.map((data) => {
            const { id, icon, tittle } = data;
            return (
              <div className="gap-4 flex justify-start items-start" key={id}>
                <i className={icon} ></i>
                <p className="text-base font-medium text-gray-600">
                  {tittle}
                </p>
              </div>
            )
          })}
        </div>
        <ul className="flex gap-4">
          <li>
            <a
              className="social-network"
              href="https://t.me/faezehrezae"
              target='_blank' rel="noreferrer"
            >
             
               <TelegramIcon/>
              
            </a>
          </li>
          <li>
           
<a
  className="social-network"
  href="http://www.linkedin.com/in/faeze-rezaee"
  target="_blank"
  rel="noreferrer"
>
  <LinkedinIcon />
</a>

          </li>
          <li>
          <a
  className="social-network"
  href="https://github.com/Faezerezae"
  target="_blank"
  rel="noreferrer"
>
  <GithubIcon />
</a>
          </li>
        </ul>
      </div>
        </div>
      </section>
    </div>
  )
}

