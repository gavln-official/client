<template>
	<Header>
		<div class="HeaderLeft">
			<i class="el-icon-back"></i>
			<i class="el-icon-right"></i>
		</div>
		<div class="headerRight">
			<el-avatar fit="cover">
				<img src="../assets/pepple.jpg">
			</el-avatar>
			<span>猪猪</span>
			<i class="el-icon-key"></i>
		</div>
	</Header>
</template>

<script>
	export default {

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