import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Home = () => {
  const banners = [
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://wallpaperaccess.com/full/2489626.jpg",
    "https://media.istockphoto.com/id/1406587434/photo/row-of-knitted-hoodies-and-pants-sports-sweaters-hanging-on-a-hangers-in-retail-store-close-up.jpg?s=612x612&w=0&k=20&c=XiRETvYTQVIZyj7jxDGcRdZYxQLIcHiJ2jesCDuHSUA=",
  ]

  return (
    <section className="text-center bg-gray-50">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{ delay: 8000 }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {banners.map((url, i) => (
          <SwiperSlide key={i}>
            <img src={url} alt={`banner-${i}`} className="w-full h-[500px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="py-10">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Clothify</h1>
        <p className="mt-4 text-gray-600">Fashion that fits you and your lifestyle.</p>
      </div>
    </section>
  )
}

export default Home
