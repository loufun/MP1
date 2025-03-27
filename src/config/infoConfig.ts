export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '梁发洲'
export const headline = '我来自华中科技大学，是电子封装专业的大一学生。'
export const introduction =
  "我是一名中国人，来自广西，现在就读于华中科技大学电子封装专业，我是一名i人，比较随和，我的兴趣爱好广泛，喜欢二次元，摄影，高科技，玩单机游戏。"
export const email = 'loufun849@gmail.com/3104159547@qq.com'
export const githubUsername = 'loufun'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "大家好啊！我是梁发洲，广西人，目前就读华中科技大学电子封装专业。",
  '目前感兴趣的方向是集成电路，正在筹备参加全国三维创新大赛，数字建模大赛，全国大学生数学竞赛，使得自己的实力和名声得到提升。',
  "这个博客主要用来记录我日常生活中的学习和成长，同时记录我思想的转变和我从日常生活中得到的感悟。OWO",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "我目前只是写下了我的目标和一些最近的想法。*V*"

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/self',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/366897583',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
