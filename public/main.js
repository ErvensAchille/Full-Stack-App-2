var trash = document.getElementsByClassName("trash");
var button1 = document.getElementsByClassName("button1")
var price = document.getElementsByClassName("price")
var calculate = document.getElementById("calculate")

Array.from(button1).forEach(function(element) {
      element.addEventListener('click', function(){

        const name = this.parentNode.parentNode.childNodes[1].innerText
        const weight= this.parentNode.parentNode.childNodes[3].innerText
        const height = this.parentNode.parentNode.childNodes[5].innerText
        const bmi = this.parentNode.parentNode.childNodes[7].innerText
        const results = this.parentNode.parentNode.childNodes[9].innerText
        const trash = this.parentNode.parentNode.childNodes[11].innerText


        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'weight': weight,
            'height': height,
            'bmi': bmi,



          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          // window.location.reload(true)
        })
      });
});

document.querySelector("#calculateBmi").addEventListener('click', function(){
  //get the values out of the input
  let height = document.querySelector("#height").value
  let weight = document.querySelector("#weight").value

  //fetch put
  fetch('doink', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'h': height,
              'w': weight

            })
          })
          .then(response => {
            if (response.ok) return response.json()
          })
          .then(data => {
            console.log(data)
            window.location.reload(true)
          })

})




// Array.from(thumbUp).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
// Array.from(thumbDown).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
//         fetch('messagesAlt', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg,
//             'thumbUp':thumbUp
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           window.location.reload(true)
//         })
//       });
// });
//
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        let name = this.parentNode.parentNode.childNodes[1].innerText
        let w = this.parentNode.parentNode.childNodes[3].innerText
        let h = this.parentNode.parentNode.childNodes[5].textContent
        let bmi = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)
        fetch('profile', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'h': h,
            'w': w,
            'bmi': bmi
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
