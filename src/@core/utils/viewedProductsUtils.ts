// utils/cookieUtils.ts
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const VIEWED_PRODUCTS_KEY = 'viewedProducts'

export const getViewedProductsFromCookies = (): string[] => {
  return cookies.get(VIEWED_PRODUCTS_KEY) || []
}

export const addProductToViewedProducts = (productId: string): void => {
  let viewedProducts = getViewedProductsFromCookies()

  const productIndex = viewedProducts.indexOf(productId)
  if (productIndex !== -1) {
    // Remove the product from its current position
    viewedProducts.splice(productIndex, 1)
  }
  // Add the product at the beginning of the array
  viewedProducts = [productId, ...viewedProducts]

  // Limit the array to a certain length if needed
  const maxProducts = 4 // Adjust as needed
  viewedProducts = viewedProducts.slice(0, maxProducts)

  //   if (!viewedProducts.includes(productId)) {
  //     viewedProducts.push(productId)
  //     cookies.set(VIEWED_PRODUCTS_KEY, viewedProducts, { path: '/', maxAge: 259200 }) // Expires in 3 days
  //   }
  cookies.set(VIEWED_PRODUCTS_KEY, viewedProducts, { path: '/', maxAge: 259200 }) // Expires in 3 days
}
