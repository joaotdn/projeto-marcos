<template>
	<div>
		<v-card>
			<v-card-title>
				<v-text-field append-icon="search" label="Buscar" single-line hide-details v-model="search"></v-text-field>
			</v-card-title>
		</v-card>
	
		<v-expansion-panel>
			<v-expansion-panel-content v-for="(item,i) in items" :key="i">
				<div slot="header">{{ item.name }}</div>
				<v-card>
					<v-card-text class="grey lighten-3">{{ item.content }}</v-card-text>
				</v-card>
			</v-expansion-panel-content>
		</v-expansion-panel>
	</div>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			pagination: {},
			items: [
				{
					value: false,
					name: 'Fruta',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					value: false,
					name: 'Pessoa',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
				{
					value: false,
					name: 'Música',
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				},
			]
		}
	}
}
</script>