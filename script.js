const product = {

  "name": "app test 1",
  "description": "somthing longer",
  "brand": "nokia",
  "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
  "price": 100,

}
window.onload = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product", {
      method:"POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhmZWFhY2FhMjAwMTU1MmExNjEiLCJpYXQiOjE2MzU5NDQ3MDIsImV4cCI6MTYzNzE1NDMwMn0.Fcv6mw_bw-ii1EPsZggnLy0HeFjRBc1ToZFVkAJKVzg"
      }
    })
      const body = await response.json()
      console.log(body);



}



// window.onload =() => {
//   readApiHere()
// }
