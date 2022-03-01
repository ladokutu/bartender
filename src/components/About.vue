<template>
  <v-main>
	<v-container fluid>
		<v-row dense>
			<v-col :cols="12">
			<v-card
				:loading="loading"
				class="mx-auto my-12"
			>
			<template slot="progress">
			<v-progress-linear
				color="deep-purple"
				height="10"
				indeterminate
			></v-progress-linear>
			</template>
				<v-img
					height="300" contain
					src="https://lh3.googleusercontent.com/06B5dK0owtjT3UGVT4icmVU1OwwnsTdN8EnaHU17sWehlRAibrIHzVGb_oGc7sgrlNnn"
				></v-img>
				<v-card-title>Ladokutu Informasi Solusi</v-card-title>
				<v-card-text>
					<v-row
						align="center"
						class="mx-0"
					>
					<v-rating
						:value="10"
						color="amber"
						dense
						half-increments
						readonly
						size="14"
					></v-rating>
					<div class="grey--text ms-4">
						5
					</div>
					</v-row>
					<div class="my-4 text-subtitle-1">
						Indonesian Website
					</div>
					<div>A website that provides information about news, movies and projects that have been carried out by Ladokutu Info.</div>
					<div>if you want to make web applications or mobile apps</div>
					<div>Contact : <a href="mailto:support@ladokutu.info">support@ladokutu.info</a></div>
					<div><v-btn color="blue-grey"
							class="ma-2 white--text"
							href="https://www.buymeacoffee.com/ladokutu"
							target="_blank">
							<v-img
								max-height="32" max-width="16"
								src="https://bmc-dev.s3.us-east-2.amazonaws.com/assets/icons/bmc_icon_black.png"
							></v-img>  Buy me a Coffe 
						</v-btn>
						<v-btn 
							href="bitcoin:1BaADxL8fXjn1bxak96oUTnEc5u8wAUc4U"
							target="_blank">
							<v-img
								max-height="32" max-width="32"
								src="https://s2.coinmarketcap.com/static/img/coins/200x200/1.png"
								></v-img>  Bitcoin 
						</v-btn>
					</div>
					</v-card-text>
						<v-divider class="mx-4"></v-divider>
						<v-card-title><a href="privacy.html">Privacy Policies</a> </v-card-title>
						<v-card-title><a href="term.html">Term Of Use</a></v-card-title>
			</v-card>
			</v-col>
		</v-row>
	</v-container>
	
  </v-main>
</template>

<script>
  import axios from "axios";
  export default {
    data: () => ({
		loading: false,
		drawer: false,
		master: [],
		projects: [],
		show: false,
		value: 1,
    }),
	mounted(){
			this.getItems();
		},
    methods: {
			getItems: function () {
				this.loading = true;
				axios.get('https://core.ladokutu.info/index.php/Web/menu_web')
					.then(res => {
					this.master=res.data;
				})
				.catch(err => {
					console.log(err);
				})
				this.loading = false;
		},
    },
  }
</script>