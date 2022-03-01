<template>
  <div id="header">
	<v-app-bar app>
		<v-toolbar
			color="indigo"
			dark fixed-header
		>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Ladokutu Info {{$route.meta.title}}</v-toolbar-title>
			<v-spacer></v-spacer> 
		</v-toolbar>
	</v-app-bar>
	<v-navigation-drawer app
		v-model="drawer"
	>
		<v-list dense>
			<v-list-item>
				<v-list-item-avatar>
					<v-img src="https://core.ladokutu.info/include/images/ladokutu_info.png"></v-img>
				</v-list-item-avatar>
				<v-list-item-content>
					<v-list-item-title>Ladokutu Info</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider></v-divider>
			<v-list-item
				v-for="(item) in master" 
				:key="item.id"
				:to="item.route"
			>
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>{{ item.nama_menu }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
	<v-footer app>		
		<v-bottom-navigation 	  
			absolute
			color="red"
			grow
		>
			<v-btn v-for="(item) in master" 
				:key="item.id"
				:to="item.route"
				>
					<span v-text="item.nama_menu"></span>
					<v-icon v-text="item.icon"></v-icon>
				
			</v-btn>
		</v-bottom-navigation>
	</v-footer>				
	<v-overlay :value="loading">
		<v-progress-circular
			indeterminate
			size="64"
		></v-progress-circular>
	</v-overlay>	
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data: () => ({
		loading: false,
		drawer: false,
		master: [],
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