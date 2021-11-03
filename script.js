const product = {

  "name": "app test 1",
  "description": "somthing longer",
  "brand": "nokia",
  "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
  "price": 100,

}
window.onload = async () => {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product", {
      method:"GET",
      // body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhmZWFhY2FhMjAwMTU1MmExNjEiLCJpYXQiOjE2MzU5NDQ3MDIsImV4cCI6MTYzNzE1NDMwMn0.Fcv6mw_bw-ii1EPsZggnLy0HeFjRBc1ToZFVkAJKVzg"
      }
    })
    if(response.ok){
      const data = await response.json()
      console.log(data);
      const getul = document.querySelector("tbody")
      data.forEach(item => {
        getul.innerHTML =
          `
          <tr>
            <th scope="row">${item.name}</th>
            <td>${item.description}</td>
            <td>${item.brand}</td>
            <td>${item.price}$</td>
          </tr>

        `


      })

    }else{
      throw new Error("fetch is not defined!")
    }




}



// window.onload =() => {
//   readApiHere()
// }
