const HeroSection = () => {
  const title ='พร้อมรับประทานที่นี่!'
  const subtitle = 'ถั่วแสนอร่อย ถั่วจากทุกมุมโลก ถั่วทุกสารทิศ'
  return(
    <div className="flex flex-col justify-center items-center pb-12 px-8 sm:pb-24 sm:px-48 text-center" >
    <h1 className="font-[500] text-[2rem] sm:text-[3rem] leading-none">{title}</h1>
    <h3 className="font-[400] text-[1rem] sm:text-[2rem] pt-5 leading-none">{subtitle}</h3>
  </div>
  )
}

export default HeroSection;