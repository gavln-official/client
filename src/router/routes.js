import Home from '@/pages/home/Home'
import Layout from '@/components/Layout'

export const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/all',
		meta: {
			title: '全部文件'
		},
		component: Layout,
		children: [{
			path: 'allFile',
			name: 'allFile',
			component: () => import('@/pages/all/All')
		}]
	},
	{
		path: '/collection',
		meta: {
			title: '我的收藏'
		},
		component: Layout,
		children: [{
			path: 'collection',
			name: 'collection',
			component: () => import('@/pages/collection/Collection')
		}]
	},
	{
		path: '/uploading',
		meta: {
			title: '正在上传'
		},
		component: Layout,
		children: [{
			path: 'upload',
			name: 'upload',
			component: () => import('@/pages/upload/Upload')
		}]
	},
	{
		path: '/downloading',
		meta: {
			title: '我的下载'
		},
		component: Layout,
		children: [{
			path: 'download',
			name: 'download',
			component: () => import('@/pages/download/Download')
		}]
	},
	{
		path: '/transmission',
		meta: {
			title: '传输完成'
		},
		component: Layout,
		children: [{
			path: 'transmission',
			name: 'transmission',
			component: () => import('@/pages/transmission/Transmission')
		}]
	},
	{
		path: '/myShare',
		meta: {
			title: '我的分享'
		},
		component: Layout,
		children: [{
			path: 'share',
			name: 'share',
			component: () => import('@/pages/share/Share')
		}]
	},
	{
		path: '/recycle',
		meta: {
			title: '回收站'
		},
		component: Layout,
		children: [{
			path: 'recycle',
			name: 'recycle',
			component: () => import('@/pages/recycle/Recycle')
		}]
	},

	{
		path: '/login',
		name: 'login',
		component: () => import('@/pages/login/Login')
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('@/pages/register/Register')
	},
	{
		path: '/service',
		name: 'service',
		component: () => import('@/components/Service')
	},
	{
		path: '/privacy',
		name: 'privacy',
		component: () => import('@/components/Privacy')
	},
	{
		path: '/introduce',
		name: 'introduce',
		component: () => import('@/components/Introduce')
	},
	{
		path: '*',
		name: 'notfound',
		component: () => import('@/NotFound')
	},
]
