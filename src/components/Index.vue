<template>
<v-main>
	
	<v-container fluid>
		<v-row dense>
			<v-col
				v-for="card in berita"
				:key="card.title"
				:cols="6">
				<v-card @click="bukamodal(card)"
					:loading="loading">
					<v-img :src="card.image.small"
						class="white--text align-end"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="150px">
					</v-img>
					<v-card-title v-text="card.title"></v-card-title>
					<v-card-text>{{card.description}}</v-card-text>	
					<v-card-actions>
						<v-chip class="ma-2"
							color="orange"
							text-color="white">{{card.creator}}</v-chip>
						<v-chip color="cyan">{{card.isoDate}}</v-chip>
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
	<v-dialog
		v-model="dialog"
		fullscreen
		hide-overlay
		transition="dialog-bottom-transition"
	>
		<v-card>
			<v-toolbar
				dark
				color="primary"
			>
			<v-btn
				icon
				dark
				@click="dialog = false"
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-toolbar-title>{{title}}</v-toolbar-title>
			<v-spacer></v-spacer>
			</v-toolbar>
			<iframe id="ifrm" :src="url" style="width:100%;height: 100%; position: absolute; border: none"></iframe>
		</v-card>
	</v-dialog>
		
  </v-main>
</template>

<script>
  import axios from "axios";
  export default {
    data: () => ({
		dialog: false,
		loading: false,
		drawer: false,
		master: [],
		berita: [],
		search: null,
		title: '',
		url:'',
    }),
	mounted(){
			this.getItems();
			this.getBerita();
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
			getBerita: function () {
				this.loading = true;
				axios.get('https://berita-indo-api.vercel.app/v1/kumparan-news')
					.then(res => {
					this.berita=res.data.data;
				})
				.catch(err => {
					console.log(err);
				})
				this.loading = false;
			},
			bukamodal: function (value) {
				this.dialog = true;
				this.loading = true;
				
				this.title = value.title;
				this.url = value.link;
				this.loading = false;						
			},
			
    },
  }
</script>