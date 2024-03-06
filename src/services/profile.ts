import { http } from "@/utils/http";

/**
 * 获取个人信息
 */
interface xxxType {
  msg: string;
  data: string[];
}
export const getXxxAPI = () => {
  return http<xxxType>({
    method: "GET",
    url: "/member/profile",
  });
};
