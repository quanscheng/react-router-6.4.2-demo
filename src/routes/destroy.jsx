import { redirect } from 'react-router-dom'
import { deleteContact } from '../contacts'

/*
当用户点击提交按钮时：

<Form>阻止向服务器发送新 POST 请求的默认浏览器行为，而是通过使用客户端路由创建 POST 请求来模拟浏览器
<Form action="destroy">匹配新路由并"contacts/:contactId/destroy"发送请求
动作重定向后，React Router 调用页面上数据的所有加载器以获取最新值（这是“重新验证”）。useLoaderData返回新值并导致组件更新！
添加一个表单，添加一个动作，其余的由 React Router 完成。

 */

export async function action({ params }) {
  await deleteContact(params.contactId)
  return redirect('/')
}
