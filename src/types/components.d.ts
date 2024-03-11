import GlobalComponent from "@/components/GlobalComponent.vue";

// 用于定义全局组件的组件类型
declare module "vue" {
  export interface GlobalComponents {
    GlobalComponent: typeof GlobalComponent;
  }
}

// 组件实例类型，ref获取组件时，组件事例的类型
export type GlobalComponentInstance = InstanceType<
  typeof GlobalComponentInstance
>;
