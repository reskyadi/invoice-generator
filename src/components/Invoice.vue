<template>
	<b-container>
		<b-row>
			<b-col class="text-center">
				<div style="margin: auto;">
					<img src="https://pngimage.net/wp-content/uploads/2018/06/sample-logo-design-png-3.png"
					style="width: 15vw">
					<div>
						<strong>Invoice Report</strong>
					</div>
				</div>
			</b-col>
		</b-row>
		<hr>
		<b-row>
			<b-col md="4">
				<div>
					<strong>{{ invoice.name }}</strong>
				</div>
				<div>
					{{ invoice.address }}
				</div>
			</b-col>
			<b-col offset-md="4" md="4" class="text-right">
				<strong>Number: 123456789</strong>
				<div>
					Date: {{ invoice.date }}
				</div>
				<div>
					Due: {{ invoice.date_due }}
				</div>
			</b-col>
		</b-row>
		<b-row class="mt-5">
			<b-col>
				<div class="">
					<table class="table table-striped table-bordered">
						<thead>
							<tr>
								<th class="text-center">#</th>
								<th class="text-center">Item</th>
								<th class="text-right">Quantity</th>
								<th class="text-right">Price</th>
								<th class="text-right">Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in invoice.items" :key="index">
								<td class="text-center" style="width: 60px">
									{{ index + 1 }}
								</td>
								<td>
									{{ item.name }}
								</td>
								<td class="text-right">
									{{ convertToNumber(item.quantity) }}
								</td>
								<td class="text-right">										
									{{ convertToRupiah(item.price) }}
								</td>
								<td class="text-right">
									{{ convertToRupiah(item.quantity * item.price) }}
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<div class="pl-5">
										<strong>
											Subtotal
										</strong>
									</div>
								</td>
								<td colspan="3" class="text-right">
									<strong>
										{{ convertToRupiah(subTotal) }}
									</strong>
								</td>
							</tr>
							<tr>
								<td colspan="2">
									<div class="pl-5">
										<strong>
											Tax
										</strong>
									</div>
								</td>
								<td colspan="3" class="text-right">
									<strong>
										{{ convertToRupiah(tax) }}
									</strong>
								</td>
							</tr>
						</tbody>
					</table>			
				</div>
			</b-col>
		</b-row>
		<b-row>
			<b-col md="4" offset-md="8">
				<div class="mt-3 text-right">
					<strong>
						Ammount Total
					</strong>
					<h2>
						{{ convertToRupiah(sumAmmount) }}
					</h2>
				</div>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import helper from '../helper/main'

export default {
	props: {
		invoice: Object,
	},
	methods: {
		convertToNumber(val) {
			return helper.convertToNumber(val)
		},
		convertToRupiah(val) {
			return helper.convertToRupiah(val)
		},
	},
	computed: {
		subTotal() {
			const quantity = this.invoice.items.map(data => data.quantity)
			const price = this.invoice.items.map(data => data.price)
			const eachSub = []
			quantity.forEach((data, key) => {
				eachSub.push(data*price[key])
			})
			return eachSub.reduce((partial_sum, a) => partial_sum + a)
		},
		tax() {
			return this.subTotal * 0.1
		},
		sumAmmount() {
			return this.subTotal + this.tax
		},
	},
}
</script>
