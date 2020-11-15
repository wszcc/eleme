import {
    CURRENTADDRESS,
    CURRENTRESTURANTDETAIL,
    ADDFOOD, DELETEFOOD,
    CHANGEUSERNAME,
    CHANGEADDRESS,
    CURRENTSERVICE
} from './actoins-type'
//获取当前定位城市的action
export const currentAddress = (currentCity) => (
    {
        type: CURRENTADDRESS,
        currentAddress: currentCity
    }
)

// 改变当前的餐馆详情的action
export const currentResturantDetail = (current) => {
    return {
        type: CURRENTRESTURANTDETAIL,
        currentResturantInfo: current
    }
}

// 添加商品的action
export const addFoodAction = (addFood) => (
    {
        type: ADDFOOD,
        food: addFood
    }
)

// 删除商品
export const deleteFoodActon = (deleteFood) => {
    return {
        type: DELETEFOOD,
        food: deleteFood
    }
}

// 改变用户名的action
export const changeUserName=(newName)=>{
    return {
        type:CHANGEUSERNAME,
        name:newName
    }
}

// 改变收货地址
export const changeAddress=(newAddress)=>{
    return {
        type:CHANGEADDRESS,
        name:newAddress
    }
}

// 改变当前的服务
export const changeService=(newService)=>{
    return {
        type:CURRENTSERVICE,
        service:newService
    }
}