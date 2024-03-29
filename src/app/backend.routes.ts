
const API_HOST = 'phone-ecommerce-api-production.up.railway.app';

export const BACKEND_ROUTES = {
  base: `https://${API_HOST}`,
  auth: {
      login: '/api/login',
      logout: '/api/logout',
      register: '/api/register',
      csrf: '/sanctum/csrf-cookie',
  },
  sandbox: {
    testSession: '/api/session'
  },
  products: {
    products: '/api/products',
    product: '/api/product'
  },
  purchase: {
    purchase: '/api/purchase'
  },
  orders: {
    orders: '/api/orders'
  }


};





export type RouteType = typeof BACKEND_ROUTES
