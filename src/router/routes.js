import Main from '@/components/Main'
export const routes = [
	{
		path: '/',
		name: 'main',
		component: Main
	},
	{
		path: '/all',
		meta: {
			title: '全部文件'
		},
		component: Main,
		children: [
			{
				path: 'allFile',
				name: 'allFile',
				component: () => import('@/page/all/All.vue')
			}
		]
	},
	{
		path: '/collection',
		meta: {
			title: '我的收藏'
		},
		component: Main,
		children: [
			{
				path: 'collection',
				name: 'collection',
				component: () => import('@/page/collection/Collection.vue')
			}
		]
	},
	{
		path: '/uploading',
		meta: {
			title: '正在上传'
		},
		component: Main,
		children: [
			{
				path: 'upload',
				name: 'upload',
				component: () => import('@/page/upload/Upload.vue')
			}
		]
	},
	{
		path: '/downloading',
		meta: {
			title: '我的下载'
		},
		component: Main,
		children: [
			{
				path: 'download',
				name: 'download',
				component: () => import('@/page/download/Download.vue')
			}
		]
	},
	{
		path: '/transmission',
		meta: {
			title: '传输完成'
		},
		component: Main,
		children: [
			{
				path: 'transmission',
				name: 'transmission',
				component: () => import('@/page/transmission/Transmission.vue')
			}
		]
	},
	{
		path: '/myShare',
		meta: {
			title: '我的分享'
		},
		component: Main,
		children: [
			{
				path: 'share',
				name: 'share',
				component: () => import('@/page/share/Share.vue')
			}
		]
	},
	{
		path: '/recycle',
		meta: {
			title: '回收站'
		},
		component: Main,
		children: [
			{
				path: 'recycle',
				name: 'recycle',
				component: () => import('@/page/recycle/Recycle.vue')
			}
		]
	},
	{
		path: '*',
		name: 'notfound',
		component: () => import('@/NotFound.vue')
	}

]
