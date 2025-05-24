import Lottie from 'lottie-react'
export default function AnimatedLike() {
  return (
    <>
      <div className="w-40 mx-auto mt-8">
       <Lottie animationData={require("https://assets1.lottiefiles.com/packages/lf20_j1adxyb.json")} loop={true}/>
      </div>
    </>
  );
}