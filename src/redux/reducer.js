import {
    CURRENTADDRESS, CURRENTRESTURANTDETAIL
    , ADDFOOD, DELETEFOOD,CHANGEUSERNAME,
    CHANGEADDRESS,CURRENTSERVICE
} from './actoins-type'
const defaultState = {
    imgBaseUrl: 'https://fuss10.elemecdn.com',
    imgUrl: '//elm.cangdu.org/img/',
    currentAddress: {
        name: '重庆市南岸区',
        geohash: "31.14419,121.66034",
        latitude: 31.196322,
        longitude: 121.339841
    },
    currentResturantInfo: {
        activities: [],
        address: "广东省广州市越秀区中山五路219号华联购物中心F1",
        category: "快餐便当/简餐",
        delivery_mode: { color: "57A9FF", id: 1, is_solid: true, text: "蜂鸟专送" },
        description: "sad",
        distance: "1380公里",
        float_delivery_fee: 5,
        float_minimum_order_amount: 20,
        id: 1,
        identification: { registered_number: "", registered_address: "", operation_period: "", licenses_scope: "", licenses_number: "" },
        image_path: "164ad0b6a3917599.jpg",
        is_new: true,
        is_premium: true,
        latitude: 23.12497,
        license: { catering_service_license_image: "160e91e17fa2164.png", business_license_image: "160e91e0a9f2163.png" },
        location: [113.26308, 23.12497],
        longitude: 113.26308,
        name: "效果演示",
        opening_hours: ["8:30/20:30"],
        order_lead_time: "14小时43分钟",
        phone: "13437850035",
        piecewise_agent_fee: { tips: "配送费约¥5" },
        promotion_info: "欢迎光临，用餐高峰请提前下单，谢谢",
        rating: 4.7,
        rating_count: 961,
        recent_order_num: 106,
        status: 1,
        supports: [
            {
                description: "已加入“外卖保”计划，食品安全有保障",
                icon_color: "999999",
                icon_name: "保",
                id: 7,
                name: "外卖保",
                _id: "5a5859a19c2bc57d52df30b3"
            },
            {
                description: "准时必达，超时秒赔",
                icon_color: "57A9FF",
                icon_name: "准",
                id: 9,
                name: "准时达",
                _id: "5a5859a19c2bc57d52df30b2"
            },
            {
                description: "该商家支持开发票，请在下单时填写好发票抬头",
                icon_color: "999999",
                icon_name: "票",
                id: 4,
                name: "开发票",
                _id: "5a5859a19c2bc57d52df30b1"
            }
        ],
        __v: 0
    },
    totalFood: [],
    userInfo: {
        "username": "zc",
        "user_id": 56847,
        "id": 56847,
        "city": "重庆",
        "registe_time": "2020-11-01 00:10",
        "column_desc": {
            "gift_mall_desc": "0元好物在这里",
            "game_link": "https://gamecenter.faas.ele.me",
            "game_is_show": 1, "game_image_hash": "05f108ca4e0c543488799f0c7c708cb1jpeg",
            "game_desc": "玩游戏领红包"
        },
        "point": 0,
        "mobile": "",
        "is_mobile_valid": true,
        "is_email_valid": false,
        "is_active": 1,
        "gift_amount": 3,
        "email": "",
        "delivery_card_expire_days": 0,
        "current_invoice_id": 0,
        "current_address_id": 0,
        "brand_member_new": 0,
        "balance": 0,
        "avatar": "default.jpg",
        "__v": 0
    },
    currentService:{
        name: "活动问题",
        context: "### Q1: 我是新用户，为什么不能享受新用户下单立减优惠／新用户首单红包？ * 新用户是指您的下单设备、手机号、饿了么账号、支付账号都是第一次在饿了么平台使用。以上任意条件不满足，都不能享受新用户优惠。 * 新用户立减优惠、新用户红包、满减特价菜活动不能同时使用。在您首次下单过程中，我们会优先为您选择优惠最大（优惠金额最高）的。 ### Q2: 商品活动规则 * 新用户下首单时，如果用户自己主动退单，则下次不可再享受新用户优惠，如果是商家或客服取消订单，则可以再次享受新用户优惠。 * 6.0版本（含）之前的所有版本，用户在下单时不再享受任何优惠（包含新用户、在线满减、商品折扣、红包等）。 * 移动端所有活动，相同手机号或设备每天只限3单，超过3单收取原价。 * 每个订单最多享受3份活动优惠，超过3份的其余商品收取原价。 * 下单手机号和所选择下单的商家不在同一城市，不享受优惠活动。 * 配送费不计入满减活动的门槛。 "
    }
}

const reducer = (state = defaultState, action) => {
    let newState
    switch (action.type) {
        case CURRENTADDRESS:
            newState = JSON.parse(JSON.stringify(state))
            newState.currentAddress = action.currentAddress
            return newState
        case CURRENTRESTURANTDETAIL:
            newState = JSON.parse(JSON.stringify(state))
            newState.currentResturantInfo = action.currentResturantInfo
            return newState
        case ADDFOOD:
            newState = JSON.parse(JSON.stringify(state))
            newState.totalFood.push(action.food)
            return newState
        case DELETEFOOD:
            newState = JSON.parse(JSON.stringify(state))
            newState.totalFood.splice(newState.totalFood.indexOf(action.food), 1)
            return newState
        case CHANGEUSERNAME:
            newState = JSON.parse(JSON.stringify(state))
            newState.userInfo.username=action.name
            return newState
        case CHANGEADDRESS:
            newState = JSON.parse(JSON.stringify(state))
            newState.currentAddress.name=action.name
            return newState
        case CURRENTSERVICE:
            newState = JSON.parse(JSON.stringify(state))
            newState.currentService=action.service
            return newState
        default:
            return state
    }
}
export default reducer