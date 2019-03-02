<template>
	<div class="wrap">
		<div class="title-main">
			Invoice Generator
		</div>
		<hr>
		<b-row>
			<b-col md="4" class="content left">
				<div class="btn-custom" @click="generateRandomInvoice">
					Generate Invoice
				</div>
				<div class="text-center mt-2">Generate sample invoice with data dummy.</div>
			</b-col>
			<b-col md="8" class="content right">
				<custom-invoice />
			</b-col>
		</b-row>
	</div>
</template>

<script>
import CustomInvoice from './CustomInvoice'
import bus from '../helper/bus'

export default {
	components: {
		CustomInvoice,
	},
	methods: {
		generateRandomInvoice() {
			bus.$emit('generate-random-invoice', 'random')
		}
	},
}
</script>


<style scoped>
.wrap {
	width: 80vw;
	margin: auto;
}

.title-main {
	padding-top: 0.7em;
	font-size: 3em;
	text-align: center;
}

.btn-custom {
	padding: 1rem;
	width: 80%;
	margin: auto;
	margin-top: 20vh;
	border-radius: 40px;
	background: #47a0e5;
	text-align: center;
	color: #fff;
	font-weight: 700;
	cursor: pointer;
	opacity: 0.7;
}

.btn-custom:hover {
	opacity: 1;
}

.btn-custom:active {
	background: #1382d8;
}

.content {
	min-height: 70vh;
}

.content.left {
	border-right: 4px solid #bfbfbf;
}

.content.right {
	margin-top: 2vh;
}

.content-main-right {
	padding: 2rem;
}
</style>
