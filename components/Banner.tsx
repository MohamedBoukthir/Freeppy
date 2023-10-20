import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-primaryColor to-secColor mb-8 rounded-br-lg ">
        <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="mb-8 md:mb-0 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome To Freeppy</h1>
                <p className="text-lg md:text-xl text-white mb-2">Ready to rock your look?</p>
                <p className="text-2xl md:text-5xl text-yellow-400 font-bold">Let's go!</p>
            </div>
            <div className="w-1/3 relative aspect-video">
                <Image
                    src='/banner.jpg'
                    alt="Banner"
                    className="object-contain rounded-lg"
                    width={700}
                    height={420}
/>
            </div>
        </div>
    </div>
  )
}

export default Banner