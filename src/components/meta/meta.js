import weixin from '@/assets/images/weixin.jpg'
import alipay from '@/assets/images/alipay.jpg'
import recommend from '@/assets/images/recommend.jpg'
import img from '@/assets/vux_logo.png'
// 会员
import m1 from '@/assets/images/m1.jpg'
import m2 from '@/assets/images/m2.jpg'
import m3 from '@/assets/images/m3.jpg'
import h1 from '@/assets/images/h1.jpg'
import h2 from '@/assets/images/h2.jpg'
import h3 from '@/assets/images/h3.jpg'
export const CHECK_LIST = [
  {
    id: 1,
    src: weixin,
    pay: '微信支付',
    dec: '亿万用户的选择，更快更安全',
    icon: recommend,
    checked: true
  }, {
    id: 2,
    src: alipay,
    pay: '支付宝支付'
  }
]
export const PANEL_LIST = [
  {
    id: 1,
    src: img,
    sold: 10,
    moods: 3,
    title: '由各种物质组成的巨型球状天体，叫做星球。',
    url: ''
  }, {
    id: 2,
    src: img,
    sold: 5,
    moods: 6,
    title: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状有自己的运行轨道。',
    url: ''
  }
]
export const MEMBER_LIST = [
  {
    id: 1,
    src: m1,
    title: '关于我们',
    url: ''
  }, {
    id: 2,
    src: m2,
    title: '联系咨询',
    url: ''
  }, {
    id: 3,
    src: m3,
    title: '检查更新',
    url: ''
  }
]
export const HOME_GRID = [
  {
    id: 1,
    link: '/component/cell',
    label: '宣传单',
    src: h1
  }, {
    id: 2,
    link: '/component/cell',
    label: '海报',
    src: h2
  }, {
    id: 3,
    link: '/component/cell',
    label: '价目单',
    src: h3
  }, {
    id: 4,
    link: '/component/cell',
    label: '条幅',
    src: img
  }, {
    id: 5,
    link: '/component/cell',
    label: '包装盒',
    src: h1
  }, {
    id: 6,
    link: '/component/cell',
    label: '手提袋',
    src: h1
  }, {
    id: 7,
    link: '/component/cell',
    label: '台挂历',
    src: h1
  }, {
    id: 8,
    link: '/component/cell',
    label: '名片',
    src: h1
  }
]
export const BANNER_LIST = [
  {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }
]
