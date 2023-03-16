//your JS code here. If required.
function myPromise(){
  return new Promise(function(resolve,reject){
    setTimeout(() =>{
      console.log("hi")
      resolve("Hello, world!");
    },1000)
  });
}
myPromise().then((value)=>{
	console.log(value);
}