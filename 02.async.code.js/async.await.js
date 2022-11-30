async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (err) {
    console.error(`Could not get products: ${error}`)
  }
}

const promises = fetchProducts()
promises.then((data) => {
  console.log(data)
})