let api_base_url = ''

if (process.env.NODE_ENV === 'development') {
  api_base_url = 'http://47.101.52.111:3000'
  // api_base_url = 'https://nicemusic-api.lxhcool.cn'
} else if (process.env.NODE_ENV === 'production') {
  api_base_url = 'https://nicemusic-api.lxhcool.cn/'
  // api_base_url = 'http://47.101.52.111:3000'
}

export default { api_base_url }
