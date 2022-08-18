class Video {
   constructor(title,uploader,time){
    this.title=title;
    this.uploader=uploader;
    this.time=time;
   } 

   watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
   }
}

let videos=[]
for(let i=0;i<5;i++){
    let vid1 = new Video(prompt(`enter movie`),prompt(`enter uploader`),prompt(`enter number of times watched`));
    videos.push(vid1);

}
videos.forEach(element => {
    element.watch();
});



