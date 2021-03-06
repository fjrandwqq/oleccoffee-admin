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

export {
  getGoods,
  updateShop,
  updateGoods
}
