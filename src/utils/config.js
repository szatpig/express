let siteConfig = {};

const commonUrl = location.hostname == 'wx.ynt.ai' ? 'https://outbound.ynt.ai/v1/outplan' : 'http://qa-outbound.ynt.ai:7001/outplan';

if(process.env.NODE_ENV === 'production'){
  siteConfig={
    api:commonUrl,
    task:commonUrl,
    wex:commonUrl,
    authorUrl:'http://file.ynt.ai:7001',
    common:commonUrl,
    zaok:commonUrl,
    web:commonUrl,
  }
}else{
  siteConfig={
    api:'/api',
    task:'/task/helper',
    wex:'/wex',
    authorUrl:'http://file.ynt.ai:7001',
    common:'/common',
    zaok:'/zaok',
    web:'http://dev-outbound.ynt.ai:7001/outplan',
  };
}


export default siteConfig
