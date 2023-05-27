# 级联选择 Cascader

## 何时使用

- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const options = ref([
  {
    value: '1',
    label: '北京',
    children: [
      {
        value: '11',
        label: '北京市',
        children: [
          {
            value: '111',
            label: '东城区'
          },
          {
            value: '112',
            label: '西城区'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: '浙江',
    children: [
      {
        value: '21',
        label: '杭州市',
        children: [
          {
            value: '211',
            label: '西湖区'
          },
          {
            value: '212',
            label: '余杭区'
          }
        ]
      },
      {
        value: '22',
        label: '湖州市',
        children: [
          {
            value: '221',
            label: '吴兴区'
          },
          {
            value: '222',
            label: '安吉区'
          }
        ]
      }
    ]
  }
])
const selectedValue = ref(['2', '21', '212'])
watchEffect(() => {
  console.log('selectedValue:', selectedValue.value)
})
function onChange (values: (number|string)[], labels: string[]) {
  console.log('values:', values)
  console.log('labels:', labels)
}
</script>

## 基本使用

<Cascader :options="options" v-model:selectedValue="selectedValue" />

<details>
<summary>查看代码</summary>

```vue
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const options = ref([
  {
    value: '1',
    label: '北京',
    children: [
      {
        value: '11',
        label: '北京市',
        children: [
          {
            value: '111',
            label: '东城区'
          },
          {
            value: '112',
            label: '西城区'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: '浙江',
    children: [
      {
        value: '21',
        label: '杭州市',
        children: [
          {
            value: '211',
            label: '西湖区'
          },
          {
            value: '212',
            label: '余杭区'
          }
        ]
      },
      {
        value: '22',
        label: '湖州市',
        children: [
          {
            value: '221',
            label: '吴兴区'
          },
          {
            value: '222',
            label: '安吉区'
          }
        ]
      }
    ]
  }
])
const selectedValue = ref(['2', '21', '212'])
watchEffect(() => {
  console.log('selectedValue:', selectedValue.value)
})
</script>
<template>
  <Cascader :options="options" v-model:selectedValue="selectedValue" />
</template>
```

</details>

## 点击任一级下拉时，选项值都会发生变化

<Cascader
  :options="options"
  v-model:selectedValue="selectedValue"
  changeOnSelect
  @change="onChange" />

<details>
<summary>查看代码</summary>

```vue
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const options = ref([
  {
    value: '1',
    label: '北京',
    children: [
      {
        value: '11',
        label: '北京市',
        children: [
          {
            value: '111',
            label: '东城区'
          },
          {
            value: '112',
            label: '西城区'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: '浙江',
    children: [
      {
        value: '21',
        label: '杭州市',
        children: [
          {
            value: '211',
            label: '西湖区'
          },
          {
            value: '212',
            label: '余杭区'
          }
        ]
      },
      {
        value: '22',
        label: '湖州市',
        children: [
          {
            value: '221',
            label: '吴兴区'
          },
          {
            value: '222',
            label: '安吉区'
          }
        ]
      }
    ]
  }
])
const selectedValue = ref(['2', '21', '212'])
watchEffect(() => {
  console.log('selectedValue:', selectedValue.value)
})
function onChange (values: (number|string)[], labels: string[]) {
  console.log('values:', values)
  console.log('labels:', labels)
}
</script>
<template>
  <Cascader
    :options="options"
    v-model:selectedValue="selectedValue"
    changeOnSelect
    @change="onChange" />
</template>
```

</details>

## 只禁用第一级下拉

<Cascader
  :options="options"
  v-model:selectedValue="selectedValue"
  :disabled="[true]"
  @change="onChange" />

<details>
<summary>查看代码</summary>

```vue
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const options = ref([
  {
    value: '1',
    label: '北京',
    children: [
      {
        value: '11',
        label: '北京市',
        children: [
          {
            value: '111',
            label: '东城区'
          },
          {
            value: '112',
            label: '西城区'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: '浙江',
    children: [
      {
        value: '21',
        label: '杭州市',
        children: [
          {
            value: '211',
            label: '西湖区'
          },
          {
            value: '212',
            label: '余杭区'
          }
        ]
      },
      {
        value: '22',
        label: '湖州市',
        children: [
          {
            value: '221',
            label: '吴兴区'
          },
          {
            value: '222',
            label: '安吉区'
          }
        ]
      }
    ]
  }
])
const selectedValue = ref(['2', '21', '212'])
watchEffect(() => {
  console.log('selectedValue:', selectedValue.value)
})
function onChange (values: (number|string)[], labels: string[]) {
  console.log('values:', values)
  console.log('labels:', labels)
}
</script>
<template>
  <Cascader
    :options="options"
    v-model:selectedValue="selectedValue"
    :disabled="[true]"
    @change="onChange" />
</template>
```

</details>

## 自定义每级宽度和间隙

<Cascader
  :options="options"
  v-model:selectedValue="selectedValue"
  :width="120"
  :gap="12"
  @change="onChange" />

<details>
<summary>查看代码</summary>

```vue
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const options = ref([
  {
    value: '1',
    label: '北京',
    children: [
      {
        value: '11',
        label: '北京市',
        children: [
          {
            value: '111',
            label: '东城区'
          },
          {
            value: '112',
            label: '西城区'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: '浙江',
    children: [
      {
        value: '21',
        label: '杭州市',
        children: [
          {
            value: '211',
            label: '西湖区'
          },
          {
            value: '212',
            label: '余杭区'
          }
        ]
      },
      {
        value: '22',
        label: '湖州市',
        children: [
          {
            value: '221',
            label: '吴兴区'
          },
          {
            value: '222',
            label: '安吉区'
          }
        ]
      }
    ]
  }
])
const selectedValue = ref(['2', '21', '212'])
watchEffect(() => {
  console.log('selectedValue:', selectedValue.value)
})
function onChange (values: (number|string)[], labels: string[]) {
  console.log('values:', values)
  console.log('labels:', labels)
}
</script>
<template>
  <Cascader
    :options="options"
    v-model:selectedValue="selectedValue"
    :width="120"
    :gap="12"
    @change="onChange" />
</template>
```

</details>

## APIs

参数 | 说明 | 类型 | 默认值 | 必传
-- | -- | -- | -- | --
options | 可选项数据源 | Option[] | [] | false
selectedValue(v-model) | 级联选中项 | (number|string)[] | [] | false
label | 下拉字典项的文本字段名 | string | 'label' | false
value | 下拉字典项的值字段名 | string | 'value' | false
children | 下拉字典项的后代字段名 | string | 'children' | false
changeOnSelect | 当此项为true时，点选每级菜单选项值都会发生变化；否则只有选择第三级选项后选项值才会变化 | boolean | false | false
zIndex | 下拉层级 | number | 1 | false
gap | 级联下拉框相互间隙宽度，单位px | number | 8 | false
width | 三级下拉各自宽度，单位px | number &#124; number[] | 120 | false
height | 下拉框高度，单位px | number | 32 | false
disabled | 三级各自是否禁用 | boolean &#124; boolean[] | false | false
placeholder | 三级下拉各自占位文本 | string &#124; string[] | '请选择' | false
maxDisplay | 下拉面板最多能展示的下拉项数，超过后滚动显示 | number | 6 | false

## Option Type

名称 | 说明 | 类型 | 必传
-- | -- | -- | --
label | 选项名 | string | false
value | 选项值 | string &#124; number | false
disabled | 是否禁用选项 | boolean | false
children | 选项children数组 | Option[] | false
[propName: string] | 添加一个字符串索引签名，用于包含带有任意数量的其他属性 | any | -

## Events

事件名称 | 说明 | 参数
-- | -- | --
change | 选择完成后的回调 | (values: (number&#124;string)[], labels: string[]) => void