<template>
	<div>
		<div class="title-medium">
			Custom Invoice
		</div>
		<form>
			<b-row>
				<b-col>
					<div class="form-group">
						<label>Name</label>
						<input class="form-control" v-model="invoice.name" placeholder="Name" name="name">
					</div>

					<div class="form-group">
						<label>Address</label>
						<textarea v-model="invoice.address"
						name="address" rows="3"
						class="form-control" placeholder="Address"></textarea>
					</div>
					<div class="form-group">
						<label>Date</label>
						<datepicker v-model="invoice.date"
						input-class="form-control" placeholder="Date"></datepicker>
					</div>
					<div class="form-group">
						<label>Due Date</label>
						<datepicker v-model="invoice.date_due"
						input-class="form-control" placeholder="Due Date"></datepicker>						
					</div>
				</b-col>
				<b-col>
					<label>Item List</label>
					<div v-for="(data, index) in invoice.items"
					:key="index"
					class="form-group">
						<input type="text" class="form-control w30" placeholder="Name"
						v-model="data.name">
						<input type="text" class="form-control w30" placeholder="Quantity"
						v-model="data.quantity">
						<input type="text" class="form-control w30" placeholder="Price"
						v-model="data.price">
					</div>
					<b-btn class="mt-4" style="width: 100%" @click="addNewItem">
						+ Add New Item
					</b-btn>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-btn style="float: right" @click="generateCustomInvoice">
						Generate Custom Invoice
					</b-btn>
				</b-col>
			</b-row>
		</form>
	</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import bus from '../helper/bus'

export default {
	components: {
		Datepicker,
	},
	data() {
		return {
			invoice: {
				name: '',
				date: '',
				date_due: '',
				address: '',
				items: [
					{
						name: '',
						quantity: '',
						price: '',
					}
				]
			},
		}
	},
	methods: {
		addNewItem() {
			const newItem = {
				name: '',
				quantity: '',
				price: '',
			}
			this.invoice.items.push(newItem)
		},
		generateCustomInvoice() {
			const date = this.invoice.date
			const date_due = this.invoice.date_due
			if (date !== '') {
				this.invoice.date = `${date.toLocaleString('en-us', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`
			}
			if (date_due !== '') {
				this.invoice.date_due = `${date_due.toLocaleString('en-us', { month: 'long' })} ${date_due.getDate()}, ${date_due.getFullYear()}`				
			}
			bus.$emit('generate-custom-invoice', this.invoice)
		},
	}
}
</script>


<style scoped>
.title-medium {
	font-size: 2em;
}

.w30 {
	width: 30%;
	float: left;
	margin-right: 3%;
	margin-bottom: 5px;
}
</style>
