// import React from 'react';
// import YoutubeAPI from 'youtube-api-search';
// import VideoList from './VideoList';
// import VideoPlayer from './VideoPlayer';
// const APIKEY="AIzaSyCFf4O12StnOxZNlOszZAgih0OeZ9UcHx4";
// class youtubeDashboard extends React.Component{
    


//    constructor(){
//        super();
//        this.state={
//            videos:[],
//            selectedVideo:null
//        }

//        }


//        componentDidMount(){
//         let currentObject=this;
//         YoutubeAPI({key:APIKEY,term:'dhoni stumps'},function(videos){
//             console.log('videos are',videos);
//             currentObject.setState({videos:videos,selectedVideo:videos[0]})
//         })

//        }
   


//     render(){
//         return(
//             <div>
//                 <h1>youtubeDashboard component</h1>
//                 <VideoPlayer video={this.state.selectedVideo}></VideoPlayer>
//                 <VideoList  onvideoSelected={videoUpdateOnClick++} videos={this.state.videos}></VideoList>
                
//             </div>
//         )
//     }
// }
// export default youtubeDashboard





import React from 'react';
import YoutubeAPI from 'youtube-api-search';
import VideoList from './VideoList';
import VideoPlayer from './VideoPlayer';
import SearchBar from './SearchBar';
const APIKEY="AIzaSyCFf4O12StnOxZNlOszZAgih0OeZ9UcHx4";
class YoutubeDashboard extends React.Component{
    


   constructor(){
       super();
       this.state={
           videos:[],
           selectedVideo:null

       }

       }


       componentDidMount(){
        this.fetchYoutubeVideos('dhoni stumps');
    }
      fetchYoutubeVideos =(term) =>{
         console.log(' search term',term);

         let currentObject=this;
        YoutubeAPI({key:APIKEY,term:term},videos =>{
            console.log('videos',videos);
            currentObject.setState({videos:videos, selectedVideo:videos[0]});   
        
        })

       }
   


       render(){

        // let videoUpdateOnClick=
        return(
            <div>
                <h1>I am youtube dashboard!!</h1>

                  <SearchBar onSearchTerm= {(term) => {
                       this.fetchYoutubeVideos(term);
                  }}></SearchBar>

                 <VideoPlayer video={this.state.selectedVideo}></VideoPlayer>
 
                  <VideoList onvideoSelected={selectedVideo => {this.setState({selectedVideo})}} videos={this.state.videos}></VideoList>
                  

                
            </div>
        )
    }
}
export default YoutubeDashboard