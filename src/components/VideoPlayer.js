// import React from 'react';
// class VideoPlayer extends React.Component{
//     render(){
//         console.log('selectedVideo is',this.props.video)
//         let video=this.props.video;
//         console.log('video',video);
//         var v=Object.assign({},video);
//         console.log('v',v);
//         var x=Object.assign({},v.id);
//         let videoId=x.videoId;
//         console.log('videoId',videoId);
//         let src="https://www.youtube.com/embed/${videoId}"
//         return(
//             <div>
//                 <iframe width="1000" height="500" src={url} ></iframe>
//             </div>
//         )
//     }
// }
// export default VideoPlayer







import React,{Component} from 'react';

class VideoPlayer extends Component{
    render(){
        console.log('selected video',this.props.video);

        let video=this.props.video;

        console.log('video',video);
         var v=Object.assign({},video);
         console.log('v',v);
        //var v= JSON.parse(JSON.stringify(video));
       var x=Object.assign({},v.id);
       let videoId= x.videoId;
       console.log('videoId',videoId);
       let src=`https://www.youtube.com/embed/${videoId}`
       // let url="https://www.youtube.com/embed/RT_hpbkyZ4U";
        return (
            <div>
    <iframe width="1000" height="400" src={src}></iframe>
            </div>
        )
    }
    
}

export default VideoPlayer;