<template>
	<Header>
		<div class="HeaderLeft">
			<i
					class="el-icon-back"
					@click="back"
			></i>
			<i class="el-icon-right"></i>
		</div>
		<div class="headerRight">
			<el-avatar fit="cover">
				<img src="../assets/pepple.jpg">
			</el-avatar>
			<span>猪猪</span>
			<router-link to="/login">
				<i class="el-icon-key"></i>
			</router-link>
		
		</div>
	</Header>
</template>

<script>
	import loginApi from '@/api/login'
	export default {
		mounted() {
			loginApi.getUseInfo().then(res => {
				console.log(res)
			})
		},
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped lang="scss">
	Header {
		display: flex;
		justify-content: space-between;

		.HeaderLeft {
			width: 60px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.el-icon-back, .el-icon-right {
				font-size: 20px;
			}
		}

		.headerRight {
			width: 150px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.el-icon-key {
				font-size: 20px;
			}
		}
	}
</style>
