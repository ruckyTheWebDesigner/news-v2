import Gif from "./assets/loading.gif";

function Loading() {
  return (
    <div className='loading-container'>
      <img className='loading' src={Gif} alt='' srcSet='' />
    </div>
  );
}

export default Loading;
