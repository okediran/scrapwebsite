import ReactPlayer from 'react-player/youtube'

function Video() {
    
    return (
        <div>
           <ReactPlayer className="reactplayer"  width='100%' height='700px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls /> 
        </div>
        );
}

     export default Video;