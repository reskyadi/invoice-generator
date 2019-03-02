<template>
	<div>
		<div v-if="!isInvoice">
			<generator />
		</div>
		<div v-if="isInvoice">
			<invoice
			:invoice="invoice"></invoice>
		</div>
	</div>
</template>

<script>
import Generator from '../components/Generator.vue'
import Invoice from '../components/Invoice.vue'

import bus from '../helper/bus'

export default {
	components: {
		Generator,
		Invoice,
	},
	data() {
		return {
			isInvoice: false,
			invoice: {
				name: 'Resky Adi Nugraha',
				date: 'March 1, 2019',
				date_due: 'March 2, 2019',
				address: 'Jl. Ciseupna no. 38 RT 02 / 06 Cibeber - Cimahi, 40531 Jawa Barat Indonesia',
				items: [
					{
						name: 'Name',
						quantity: 10,
						price: 1000,
					},
					{
						name: 'Name',
						quantity: 10,
						price: 1000,
					},
					{
						name: 'Name',
						quantity: 10,
						price: 1000,
					},
				]
			},
		}
	},
	created() {
		bus.$on('generate-random-invoice', data => {
			// Do other something
			this.isInvoice = true
		})
		bus.$on('generate-custom-invoice', data => {
			this.invoice = data
			this.isInvoice = true
		})
	},
}
</script>
