// 获取当前环境 import.meta.env.MODE --dev
const env = import.meta.env.MODE || "prod";
const EnvConfig = {
    // 开发环境
    development: {
        baseApi: "/api",
        mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
    },
    // 测试环境
    test: {
        baseApi: "//test.future.com/api",
        mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
    },
    // 生产环境
    prod: {
        baseApi: "//future.com/api",
        mockApi: "https://apifoxmock.com/m1/4068509-0-default/api",
    },    
};

export default {
    env,
    ...EnvConfig[env],
    // mock
    mock: false,
}