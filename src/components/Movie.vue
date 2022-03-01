<template>
  <v-main>
	
	<v-container fluid>
		<v-sheet
			class="mx-auto"
			elevation="5"
			max-width="100%"
		>
		<v-slide-group
			v-model="model"
			class="pa-4"
			active-class="success"
			show-arrows
		>
			<v-slide-item
				v-for="(item,i) in box"
				:key="i"
				v-slot="{ active}"
			>
			<v-card @click="bukamodal(item)"
				:color="active ? undefined : 'grey lighten-1'"
				:loading="loading">
				<v-img :src="item.thumbnail"
					contain
					width="300">
				</v-img>
				<v-card-subtitle v-text="item.title"></v-card-subtitle>	
			</v-card>
			</v-slide-item>
		</v-slide-group>
		</v-sheet>
	</v-container >
	
	<v-container fluid>
		<v-row dense>
			<v-col
				v-for="card in movie"
				:key="card.title"
				:cols="3">
			<v-card @click="bukamodal(card)"
				:loading="loading">
				<v-img :src="card.thumbnail"
					contain>
				</v-img>
				<v-card-subtitle v-text="card.title"></v-card-subtitle>
					<v-card-text>
					<v-row align="center" class="mx-0">
						<v-chip
							class="ma-2"
							color="orange"
							text-color="white"
						>
						{{card.rating}}
						<v-icon right>
							mdi-star
						</v-icon>
						</v-chip>
						<v-chip color="cyan">{{card.quality}}</v-chip><v-chip>{{card.duration}}</v-chip>
					</v-row>
				</v-card-text>
			</v-card>
			</v-col>
		</v-row>						  
	</v-container>
	
	
	<v-container fluid>
		<v-col>
			<v-pagination
				v-model="pagination.page"
				:length="pagination.length"
				:total-visible="pagination.visible"
				@next="changepage"
				@previous="changepage"
				@input="changepage"
			></v-pagination>
			
		</v-col>
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
			<v-toolbar-title>{{watch.title}}</v-toolbar-title>
			<v-spacer></v-spacer>
			</v-toolbar>
			<iframe id="ifrm" :src="watch.src" style="width:100%;height: 100%; position: absolute; border: none"></iframe>
		</v-card>
	</v-dialog>
		
  </v-main>
</template>

<script>
  import axios from "axios";
  export default {
    data: () => ({
		dialog: false,
		judul: null,
		model: null,
		pagination: {
            page: 1,
			visible: 5,
			length: 483,
        },
		loading: false,
		drawer: false,
		master: [],
		movie: [],
		box: [],
		search: null,
		watch: [],
		url:null,
		
    }),
	mounted(){
		this.getItems();
		this.getMovie();
		this.getBox();
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
			getMovie: function () {
				this.loading = true;
				axios.get('https://api-ladokutu-movie.herokuapp.com/movie?page='+this.pagination.page)
					.then(res => {
					this.movie=res.data.result;
				})
				.catch(err => {
					console.log(err);
				})
				this.loading = false;
			},
			getMovieSearch: function () {
				this.loading = true;
				axios.get('https://api-ladokutu-movie.herokuapp.com/search/'+this.search)
					.then(res => {
					this.movie=res.data.result;
				})
				.catch(err => {
					console.log(err);
				})
				this.loading = false;
			},
			getBox: function () {
				this.loading = true;
				axios.get('https://api-ladokutu-movie.herokuapp.com/box_office')
					.then(res => {
					this.box=res.data.result;
				})
				.catch(err => {
					console.log(err);
				})
				this.loading = false;
			},
			changepage: function () {
				this.getMovie();
			},
			bukamodal: function (value) {
				this.dialog = true;
				this.loading = true;
				axios.get('https://api-ladokutu-movie.herokuapp.com/watch?url='+value.watch)
					.then(res => {
					this.watch=res.data;
				})
				.catch(err => {
					console.log(err);
				})
				this.loading = false;						
			},
			
			
    },
  }
</script>