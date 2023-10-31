'use client';
import Navbar from './_components/navbar'
import HeroBanner from './_components/hero_banner'
import EmoticonTile from './_components/emoticon_tile'
import BulletScroll from './_components/bullet_scroll'
import StarSteps from './_components/star_steps'
import SocialConnection from './_components/social_connection'
import TileScroll from './_components/tile_scroll'
import VacancyTile from './_components/vacancy_tile'
import Footer from './_components/footer'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import data from './_utils/data.json' assert {type: 'json'}


export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      var arrMoveInLeft = document.querySelectorAll('.move-in-left')
      var arrMoveInRight = document.querySelectorAll('.move-in-right')
      var arrFadeIn = document.querySelectorAll('.fade-in')
      var arrScaleUp = document.querySelectorAll('.scale-up')
      var arrScaleUpLeft = document.querySelectorAll('.scale-up-left')
      var arrScaleUpRight = document.querySelectorAll('.scale-up-right')
      
      for (let i = 0; i < arrMoveInLeft.length; i++) {
        gsap.from(arrMoveInLeft[i], {scrollTrigger: {trigger: arrMoveInLeft[i]}, x: -1600, duration: 1, ease: "power2.out"})
      }
      
      for (let i = 0; i < arrMoveInRight.length; i++) {
        gsap.from(arrMoveInRight[i], {scrollTrigger: {trigger: arrMoveInRight[i]}, x: 1600, duration: 1, ease: "power2.out"})
      }

      for (let i = 0; i < arrFadeIn.length; i++) {
        gsap.from(arrFadeIn[i], {scrollTrigger: {trigger: arrFadeIn[i]}, opacity: 0, duration: 1, ease: "power2.in"})
      }

      for (let i = 0; i < arrScaleUp.length; i++) {
        gsap.from(arrScaleUp[i], {scrollTrigger: {trigger: arrScaleUp[i]}, scale: 0, duration: 1, ease: "power2.out"})
      }

      for (let i = 0; i < arrScaleUpLeft.length; i++) {
        gsap.from(arrScaleUpLeft[i], {scrollTrigger: {trigger: arrScaleUpLeft[i]}, scale: 0, x: -arrScaleUpLeft[i].clientWidth, duration: 1, ease: "power2.out"})
      }

      for (let i = 0; i < arrScaleUpRight.length; i++) {
        gsap.from(arrScaleUpRight[i], {scrollTrigger: {trigger: arrScaleUpRight[i]}, scale: 0, x: arrScaleUpLeft[i].clientWidth, duration: 1, ease: "power2.out"})
      }

      var t1 = gsap.timeline({scrollTrigger: ".sounds-familiar .character-move-in"})
      t1.fromTo(".sounds-familiar .character-move-in", {x: 1600, y: 50, rotation:-90}, {x: 0, y: 50, duration: 2, ease: "power1.out"})
      .fromTo(".sounds-familiar .character-move-in", {y: 50, rotation:-90}, {y: 0, duration: 1, rotation:-30, ease: "power1.out"}, "-=1")

      gsap.from(".emoticon-tile-container", {scrollTrigger: ".emoticon-tile-container", x: 1600, duration: 2, ease: "back.out(1)"})
      
      var t2 = gsap.timeline({scrollTrigger: ".meet-app .circle-boundary"})
      t2.to(".meet-app .circle-boundary", {left:0, duration: 2, ease: "none"})
      .to(".meet-app .circle-boundary", {translateX: "-50%", duration: 0.5, ease: "power1.out"})
      .to(".meet-app  .circle-boundary", {translateY: 0, duration: 0.5, ease: "none"}, "-=0.5")

      var t3 = gsap.timeline({scrollTrigger: ".meet-app .character"})
      t3.fromTo(".meet-app .character", {opacity: 0, scale: 0, rotation: 30}, {opacity: 1, scale: 1, rotation: 30, duration: 1, ease: "none"})
      .fromTo(".meet-app .character", {rotation: 30}, {rotation: 0, ease: "none", duration: 0.5}, "-=0.5")
      .from(".meet-app .star", {top: "50%", opacity: 0, ease: "none", duration: 0.5}, "-=0.5")

      gsap.to(".meet-app .leaf-1", {scrollTrigger: ".meet-app .leaf-1", x: -100, y: -100, rotation: "+="+720, duration: 3, ease: "power.1.out"})
      gsap.to(".meet-app .circle-1", {scrollTrigger: ".meet-app .leaf-1", x: -100, y: -150, duration: 3, ease: "power.1.out"})
      gsap.to(".meet-app .circle-2", {scrollTrigger: ".meet-app .leaf-1", x: -100, y: -80, duration: 3, ease: "power.1.out"})
      gsap.to(".meet-app .leaf-2", {scrollTrigger: ".meet-app .leaf-2", rotation: "-="+720, duration: 3, ease: "power.1.out"})
      gsap.to(".meet-app .flower", {scrollTrigger: ".meet-app .flower", rotation: "-="+360, duration: 3, ease: "power.1.out"})

      var t4 = gsap.timeline({scrollTrigger: ".self-improvement"})
      
      t4.fromTo(".self-improvement .character-move-in", {top: "1000%", left: "100%", rotation:0}, {top: "100%", left: "100%", duration: 2, ease: "sine.out"})
      .fromTo(".self-improvement .character-move-in", {rotation: 0}, {duration: 1, rotation:-90, ease: "sine.in"}, "-=1")
      .fromTo(".self-improvement .character-move-in", {left: "100%"}, {left: "0%", duration: 2, ease: "sine.in"}, "-=1")
      .fromTo(".self-improvement .character-move-in", {rotation: -90, top: "100%",}, {rotation: 30, top: "0%", duration: 1, ease: "power3.out"})

      gsap.from(".start-test .start-test-btn", {scrollTrigger: ".start-test .start-test-btn", opacity: 0, scale: 0, duration: 0.5})

      var t5 = gsap.timeline({scrollTrigger: ".work-with-us .character"})
      t5.to(".work-with-us .character", {rotation: 15, duration: 0.5, ease: "power1.out"})
      t5.to(".work-with-us .character", {rotation: 0, duration: 0.5, ease: "power1.in"})
      .to(".work-with-us .character", {rotation: -30, duration: 0.5, scale: 1.05, ease: "power1.out"})
      .to(".work-with-us .character", {rotation: 0, duration: 1, scale: 1, ease: "back.out(1.4)"})
    })
  
    return () => {
      ctx.revert()
    }
  }, [])
  


  return (
    <div className="main-div w-full max-w-[90rem] m-auto">
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>

      <div className="py-20 px-20 flex flex-row space-x-8 justify-center">
        <div className="w-80 text-4xl font-semibold">
          EQ beats IQ
        </div>
        <div className="w-80 leading-8 text-gray-600">
          People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
        </div>
        <div className="w-80 leading-8 text-gray-600">
          They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
        </div>
      </div>

      <div className="w-full sounds-familiar overflow-x-clip py-20">
        <div className="flex flex-row">
          <div className="move-in-left heading fade-in scale-up pl-16 pr-8 text-5xl font-semibold pb-16">
            Does this sounds familiar...
          </div>
          <div className="w-16 h-16 relative flex justify-center items-center self-start character-move-in">
            <img src="/character/nerd-1.png" className="absolute z-10"></img>
            <img src="/character/nerd-bg-red.png" className="absolute opacity-10 scale-125 opacity-20"></img>
          </div>
        </div>
        <div className="w-full overflow-x-clip flex flex-row justify-end py-4">
          <div className="emoticon-tile-container w-fit mx-auto flex flex-row px-8 items-center space-x-8">
            <EmoticonTile {...data.emoticon_tiles[0]}></EmoticonTile>
            <EmoticonTile {...data.emoticon_tiles[1]}></EmoticonTile>
            <EmoticonTile {...data.emoticon_tiles[2]}></EmoticonTile>
            <EmoticonTile {...data.emoticon_tiles[3]}></EmoticonTile>
            <EmoticonTile {...data.emoticon_tiles[4]}></EmoticonTile>
          </div>
        </div>
      </div>

      <div className="w-full px-8 py-20">
        <div className="meet-app w-full relative overflow-clip rounded-3xl flex flex-col justify-center space-y-20 px-12 py-20 bg-orange-50">

          <div className="w-100 grid grid-cols-2 gap-x-10 z-30">
            <div className="move-in-left heading fade-in scale-up flex flex-col space-y-6">
              <div className="text-gray-700 text-sm font-medium">
                Built out of frustration
              </div>
              <div className="text-5xl font-semibold">
                Meet the ahead app
              </div>
            </div>
            <div></div>
          </div>
          
          <div className="w-100 grid grid-cols-2 gap-x-10 z-20">
            
            <div className="relative">
              <div className="relative z-10 rounded-full bg-gray-50 -translate-x-1/2 -translate-y-1/2 left-[40%] top-1/2 w-[16rem] aspect-square flex justify-center items-center">
                <div className="w-10/12 aspect-square rounded-full bg-white flex justify-center items-center">
                  <img src="/character/nerd-3.png" className="character w-1/2 z-20"></img>
                  <img src="/star.png" className="star w-1/6 absolute top-0 m-auto opacity-75 z-10"></img>
                </div>
              </div>
              <div className="absolute z-0 right-0 bottom-0">
                <div className="leaf-1 absolute bottom-0 right-0 rounded-t-full w-12 h-6 scale-x-150 rotate-45 bg-emerald-300"></div>
                <div className="circle-1 absolute rounded-full w-6 h-6 bottom-8 right-0 bg-red-200"></div>
                <div className="circle-2 absolute rounded-full w-12 h-12 top-2 right-6 bg-orange-200 flex flex-row items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-orange-400"></div>
                </div>
              </div>
            </div>

            <div className="scale-up-left fade-in max-w-md flex flex-col space-y-3">
              <div className="leading-6 tracking-wide text-gray-600">
                A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional
                intelligence.
              </div>
              <div className="leading-6 tracking-wide text-gray-600">
                Think of it as a pocket cheerleader towards a better, more fulfilling.
              </div>
            </div>
          </div>

          <div className="circle-boundary absolute w-1/5 aspect-square rounded-full left-2/3 bottom-0 translate-y-1/2 bg-orange-100"></div>
          <div className="leaf-2 absolute top-6 right-24 rounded-t-full w-12 h-6 scale-x-150 rotate-45 bg-emerald-300"></div>
          <div className="flower absolute -top-16 right-16 z-10 w-12 aspect-square">
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-1/4 aspect-square bg-orange-500"></div>
            <div className="absolute rotate-[15deg] rounded-lg w-full h-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200"></div>
            <div className="absolute rotate-[75deg] rounded-lg w-full h-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200"></div>
            <div className="absolute rotate-[135deg] rounded-lg w-full h-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-200"></div>
          </div>

        </div>
      </div>

      <div className="w-100 h-fit px-8 py-20">
        <div className="self-improvement w-100 rounded-3xl flex flex-col justify-center space-y-16 px-12 py-10">
          <div className="heading flex flex-col space-y-6">
            <div className="move-in-left fade-in scale-up text-gray-700 text-md font-medium">
              Wrong with self-improvement & how we're fixing it.
            </div>
            <div className="flex flex-row w-100 items-center space-x-4 relative">
              <div className="move-in-left fade-in scale-up text-5xl font-semibold">
                Self-improvement. Ugh.
              </div>
              <div className="flex-1 self-stretch relative flex flex-col justify-center">
                <div className="absolute character-move-in w-16 h-16 flex justify-center items-center">
                  <img src="/character/happy-1.png" className="absolute z-10"></img>
                  <img src="/character/happy-bg-gray.png" className="absolute scale-125 opacity-40"></img>
                </div>
              </div>
            </div>
          </div>
          
          <BulletScroll points={data.self_improvement_points}></BulletScroll>

        </div>
      </div>

      <div className="py-20 px-20 flex flex-row space-x-8 justify-center">
        <div className="w-80 text-4xl font-semibold">
          Be the best you with EQ
        </div>
        <div className="w-80 leading-8 text-gray-600">
          Not having your own emotions under control might be holding you back.
        </div>
        <div className="w-80 leading-8 text-gray-600">
          Additionally, not understanding those of others stops you from being parent, friend you can be.
        </div>
      </div>

      <div className="w-100 px-8 py-20">
        <div className="w-100 social-skills rounded-3xl flex flex-col justify-center items-center space-y-16 px-12 py-10 bg-sky-50">
          
          <div className="flex flex-col heading space-y-6 items-center">
            <div className="text-gray-700 text-md font-medium">
              Let your friends, family, and co-workers (anonymously) rate your social skills.
            </div>
            <div className="text-5xl font-semibold">
              Ever wondered what others think of you?
            </div>
          </div>

          <div className="max-w-[60rem]">
            <StarSteps steps={data.star_steps}></StarSteps>
          </div>

          <div className="w-[40rem] max-w-full">
            <SocialConnection></SocialConnection>
          </div>

        </div>
      </div>

      <div className="w-100 px-8 py-20">
        <div className="w-100 py-40 flex flex-row justify-center">

          <div className="start-test w-[40em] flex flex-col justify-center items-center text-center">
            <div className="text-gray-700 py-2">
              We take privacy seriously
            </div>
            <div className="py-2 font-bold text-3xl">
              Before you get started
            </div>
            <div className="py-3 font-semibold text-xl text-gray-700">
              "We won't share your answers with anyone (and won't ever tell you which friends said what about you)"
            </div>
            <div className="py-4 flex flex-row items-end space-x-2">
              <div className="text-gray-700">
                with love, 
              </div>
              <div>
                <img src="/signature4.png" width={100} className=""></img>
              </div>
            </div>
            <div className="py-4">
              <button className="start-test-btn bg-black rounded-full text-white py-4 px-8 text-sm">Start a test</button>
            </div>
            <div className="text-sm text-gray-600">
              Take only 5 minutes
            </div>
          </div>

        </div>
      </div>

      <div className="w-100 px-8 py-20">
        <div className="work-with-us w-100 rounded-3xl flex flex-row space-x-6 px-12 py-10 bg-purple-50">
          
          <div className="w-1/2 flex flex-col space-y-12">
            <div className="move-in-left head fade-in scale-up text-5xl font-semibold">
              Work with us
            </div>
            <div className="w-[30rem] rounded-xl flex flex-col overflow-clip">
              {
                [
                  {"head": "About", "color": "bg-white", "body": "At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!"},
                  {"head": "Product", "color": "bg-orange-50", "body": "Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did..."}
                ].map((item, index) =>(
                  <div className={`p-6 flex flex-col ${item.color}`}>
                    {
                      index == 0 ?
                      <div className="character origin-[50%_0%] relative w-fit py-2">
                        <img src="/character/happy-bg-gray.png" width={50} height={50} className="opacity-50 scale-125"></img>
                        <img src="/character/happy-2.png" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></img>
                      </div>
                      :
                      null
                    }
                    <div className="py-2 font-semibold text-lg">
                      {item.head}
                    </div>
                    <div className="text-gray-500 leading-8 ">
                      {item.body}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className="flex flex-col space-y-12">
            <div className="move-in-right fade-in scale-up text-5xl font-semibold text-violet-600 self-end pr-12">
              ahead
            </div>
            <div className="w-[30rem] h-[30rem]">
              <TileScroll list={data.tile_scroll_list}></TileScroll>
            </div>
          </div>
        
        </div>
      </div>

      <div className="w-100 px-8 py-20">
        <div className="w-100 rounded-3xl flex flex-col space-y-6 px-12 py-10">
          <div className="flex flex-col space-y-12">
            
            <div className="move-in-left fade-in scale-up text-5xl font-semibold">
              Open vacancies
            </div>
            
            <div className="flex flex-row items-start flex-wrap gap-10">
                {
                  data.vacancy_list.map(item => (
                    <VacancyTile {...item}></VacancyTile>
                  ))
                }
            </div>

          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  )
}
