export default function Slider() {
  return (
    <>
     <div className="carousel   h-[480px] mt-12 mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
    
    <img
      src="https://i.ibb.co/B5GCjZRW/room5.webp"
      className="w-full " />
      <div className="absolute left-24 right-14 top-1/3 ">
        <h1 className="text-2xl font-semibold mb-4 text-white"> Welcome to Roommate Finder-<br></br>the easiest way to connect with people <br>
        </br>looking to share a room.</h1>
        <button className="btn rounded-2xl px-8 ">Our Roomes</button>
        </div> 
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/sv1jmTkD/room2.jpg"
      className="w-full" />
          <div className="absolute left-24 right-14 top-1/3 ">
         <h1 className="text-2xl font-semibold mb-4 text-white"> Welcome to Roommate Finder-<br></br>the easiest way to connect with people <br>
        </br>looking to share a room.</h1>
        <button className="btn rounded-2xl px-8 ">Our Roomes</button>
        </div> 
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/XxBZhZgY/room3.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/xKTm22B2/room4.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> 
    </>
  );
}