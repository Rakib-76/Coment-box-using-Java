// ********
    // here i use mouse enter 
// *****

// document.getElementById('btn-mouse')
// .addEventListener('mouseenter',function(){
//     console.log("event trigger")
// })
// *********
// here i use mouse move where mouse cursor enter the button and move inside then it works
// *********
// document.getElementById('btn-mouse')
// .addEventListener('mousemove',function(){
//     console.log("event trigger")
// })


// ********
// here i use mouse out 
// *********
// document.getElementById('btn-mouse')
// .addEventListener('mouseout',function(){
//     console.log("event trigger")
// })


// document.getElementById('user-name')
// .addEventListener('focus',function(){
// console.log('we are a man')
// })
// document.getElementById('user-email')
// .addEventListener('focus',function(){
// console.log('dangerous creature in the world')
// })
// document.getElementById('user-name')
// .addEventListener('blur',function(){
// console.log('we need to rebuild our mind')
// })
// document.getElementById('user-email')
// .addEventListener('blur',function(){
// console.log('otherwise we will destroy very soon')
// })

// document.getElementById('user-email')
// .addEventListener('keydown',function(event){
// console.log('typing',event.target.value)
// })
// *****
// here keyup is better than keydown
// ****
document.getElementById('user-email')
.addEventListener('keyup',function(event){
console.log('typing',event.target.value)
})