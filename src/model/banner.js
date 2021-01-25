import { get } from '@/lin/plugin/axios'

class Banner {
  static async getBanners(page = 0, count = 10) {
    const res = await get('v1/banner/page', {
      page,
      count,
    })
    return res
  }
}

export default Banner
