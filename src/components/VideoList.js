import React from 'react';
            class VideoList extends React.Component{
            
            
                renderVideoListItems(){
                    console.log('props',this.props);

                    
                    let arr= this.props.videos.map(video =>{
                        return <li onClick={ () => {this.props.onvideoSelected(video)}} key={video.etag}>{video.snippet.title} <img src={video.snippet.thumbnails.medium.url}></img></li>
                       
                     })
                
                return arr;
                }
            
                render(){
                    // console.log(this.props.videos);
                    return(
                        <div>
                            <h3>your video list is .. </h3> 
                        <ul>
                            {this.renderVideoListItems()}
                        </ul>
                        </div>
                        )
                }
            }
            export default VideoList;