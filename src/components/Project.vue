<template>
  <v-main>
	<v-container fluid>
		<v-row dense>
			<v-col
				v-for="card in projects"
				:key="card.id_aplikasi"
				:cols="6">
					<v-card :loading="loading">
						<v-avatar class="ma-3" size="100">
							<v-img :src="card.url_image"
								class="white--text align-end"
								gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
								contain width="300"/>
						</v-avatar>
						<v-card-title v-text="card.nama_aplikasi"></v-card-title>
						<v-card-subtitle v-text="card.description"></v-card-subtitle>
						<v-card-actions>
							<v-btn
								outlined
								rounded
								text
								:href="card.url_download"
							>
							Download
							</v-btn>
						</v-card-actions>
					</v-card>
			</v-col>
		</v-row>						  
	</v-container>
	<v-container fluid>
		<v-col>
			<v-card-text>
				<v-spacer></v-spacer>
			</v-card-text>
		</v-col>
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
    }),
	mounted(){
			this.getItems();
			this.getProjects();
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
			getProjects: function () {
				this.loading = true;
				axios.get('https://core.ladokutu.info/index.php/Web/content_projects')
					.then(res => {
					this.projects=res.data;
				})
				.catch(err => {
					console.log(err);
				})
				this.loading = false;
			},
    },
  }
</script>