// Add all your JS here

const category_list = document.querySelector('#category_list')
const products_container = document.querySelector('#products_container')

fetch('https://dummyjson.com/products/categories')
.then(response => {
    return response.json()
})
.then(data => {
    data.forEach(category => {
        var li = document.createElement('li')
        var a = document.createElement('a')
        a.href = '#'
        a.setAttribute('data-slug',category.slug)
        a.innerHTML = category.name

        // Add click event to every link

        a.addEventListener('click',function(e){
            getProducts(category.slug)
            return false
        })

        li.appendChild(a)
        category_list.append(li)
    })
})


function getProducts(slug){
    fetch('https://dummyjson.com/products/category/'+slug)
    .then( response => response.json())
    .then( data => {
        var products = data.products
        var html = ''
        products.forEach(product => {
            console.log(product)
            html+= `<div class="product">
                        <img src="${product.thumbnail}" alt="">
                        <div>${product.title}</div>
                        <div>${product.price}</div>
                        <div>${product.discountPercentage}%</div>
                        <div>${product.rating}</div>
                    </div>`
        })

        products_container.innerHTML = html


    })
}

{/* <div class="product">
                <img src="https://img.lazcdn.com/g/p/8dfcf2e0d6a11a734c465668244b6ffa.jpg_200x200q80.jpg_.webp" alt="">
                <div>Name</div>
                <div>Price</div>
                <div>Discount</div>
                <div>Rating</div>
            </div> */}