import type { LoginResult } from "@/types/member";
import { defineStore } from "pinia";
import { ref } from "vue";

// 定义 Store 方式一：
export const useMemberStore = defineStore(
  "member",
  () => {
    let title = ref<string>("Hellow World");
    // 会员信息
    const profile = ref<LoginResult>();

    // 保存会员信息，登录时使用
    const setProfile = (val: LoginResult) => {
      profile.value = val;
    };

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined;
    };

    // 记得 return
    return {
      title,
      profile,
      setProfile,
      clearProfile,
    };
  },
  {
    // 网页端配置
    // persist: true,
    // 小程序端配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key);
        },
        setItem(key, value) {
          uni.setStorageSync(key, value);
        },
      },
    },
  }
);

// 定义仓库state返回值类型（可以不写）
// interface memberType {
//   title: string;
// }
// 定义 Store 方式二：
// 这种写法不太适合对象类型的变量，因为变量类型，需要在state中将属性写出来，而第一种写法只需要给类型就不需要明确各个属性了
// export const useMemberStore = defineStore("member", {
//   state: (): memberType => {
//     return {
//       title: "Hello World",
//     };
//   },
//   actions: {
//     setTitle() {
//       this.title = "Hello World";
//     },
//   },
//   // 网页端配置
//   // persist: true,
//   // 小程序端配置
//   persist: {
//     storage: {
//       getItem(key) {
//         return uni.getStorageSync(key);
//       },
//       setItem(key, value) {
//         uni.setStorageSync(key, value);
//       },
//     },
//   },
// });
