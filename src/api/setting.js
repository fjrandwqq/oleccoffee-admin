import request from '@/utils/request'

const getGoods = params => request({
  url: '/api/goods',
  method: 'get',
  params
})

const updateShop = (shopId, params) => request({
  url: `/api/shop/${shopId}`,
  method: 'put',
  data: params
})

const updateGoods = (goodsId, params) =>
  request({
    url: `/api/goods/${goodsId}`,
    method: 'put',
    data: params
  })

const upload = params =>
  request({
    url: `/api/goods/picture/upload`,
    method: 'post',
    params,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

export {
  getGoods,
  updateShop,
  updateGoods,
  upload
}
