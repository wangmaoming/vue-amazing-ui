# 全局提示 Message

<br/>

*全局展示操作反馈信息*

## 何时使用

- 可提供成功、警告和错误等反馈信息
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式

<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onInfo (content: any) {
  message.value.info(content) // info调用
}
function onSuccess (content: any) {
  message.value.success(content) // success调用
}
function onError (content: any) {
  message.value.error(content) // error调用
}
function onWarn (content: any) {
  message.value.warn(content) // warn调用
}
function onClose () {
  console.log('close')
}
</script>

<Message ref="message" :duration="3000" :top="30" @close="onClose" />

## 基本使用

<Button type="primary" @click="onInfo('This is a normal message')">Info</Button>

<details>
<summary>查看代码</summary>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onInfo (content: any) {
  message.value.info(content) // info调用
}
function onClose () {
  console.log('close')
}
</script>
<template>
  <Button type="primary" @click="onInfo('This is a normal message')">Info</Button>
  <Message ref="message" :duration="3000" :top="30" @close="onClose" />
</template>
```

</details>

## 成功提示

<Button type="primary" @click="onSuccess('This is a success message')">Success</Button>

<details>
<summary>查看代码</summary>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onSuccess (content: any) {
  message.value.success(content) // success调用
}
function onClose () {
  console.log('close')
}
</script>
<template>
  <Button type="primary" @click="onSuccess('This is a success message')">Success</Button>
  <Message ref="message" :duration="3000" :top="30" @close="onClose" />
</template>
```

</details>

## 失败提示

<Button type="primary" @click="onError('This is a error message')">Error</Button>

<details>
<summary>查看代码</summary>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onError (content: any) {
  message.value.error(content) // error调用
}
function onClose () {
  console.log('close')
}
</script>
<template>
  <Button type="primary" @click="onError('This is a error message')">Error</Button>
  <Message ref="message" :duration="3000" :top="30" @close="onClose" />
</template>
```

</details>

## 警告提示

<Button type="primary" @click="onWarn('This is a warn message')">Warn</Button>

<details>
<summary>查看代码</summary>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const message = ref()

function onWarn (content: any) {
  message.value.warn(content) // warn调用
}
function onClose () {
  console.log('close')
}
</script>
<template>
  <Button type="primary" @click="onWarn('This is a warn message')">Warn</Button>
  <Message ref="message" :duration="3000" :top="30" @close="onClose" />
</template>
```

</details>

## APIs

参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
name |  |  |

## Events

事件名称 | 说明 | 参数
-- | -- | --
change |  |