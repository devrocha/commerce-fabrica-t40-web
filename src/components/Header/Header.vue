<script>
import { reactive, toRefs } from "@vue/reactivity";
import { useLoginStore } from "@/stores/login.js";
import { onMounted, watch } from "@vue/runtime-core";
import Button from "@/components/Button/Button.vue";
import IconButton from "@/components/IconButton/IconButton.vue";

export default {
	components: {
		Button,
		IconButton,
	},

	setup() {
		const data = reactive({
			input: "",
			clienteLogado: false,
		});

		const store = useLoginStore();

		onMounted(() => {
			if (store.cliente.role == "admin") {
				data.clienteLogado = true;
			} else {
				data.clienteLogado = false;
			}
		});

		// const cliente = JSON.parse(localStorage.getItem("cliente"));

		watch(
			() => store.cliente,
			() => {
				if (store.cliente.role !== "cliente") {
					data.clienteLogado = !data.clienteLogado;
				}
			},
			{ deep: true }
		);

		return {
			...toRefs(data),
		};
	},
};
</script>

<template>
	<v-toolbar color="#d0bdf4a3" elevation="4" v-show="!clienteLogado">
		<v-row class="d-flex align-center">
			<v-col sm="2" md="3" lg="2" align="center">
				<router-link to="/"
					><v-toolbar-title
						><img src="@/assets/images/logo.png" /></v-toolbar-title
				></router-link>
			</v-col>

			<v-col sm="7" md="6" lg="8" align="center">
				<v-row class="d-flex justify-space-around">
					<router-link
						to="/"
						style="text-decoration: none; color: inherit"
						><Button label="Home" variant="text"
					/></router-link>
					<router-link
						to="/feminino"
						style="text-decoration: none; color: inherit"
						><Button label="Feminino" variant="text"
					/></router-link>
					<router-link
						to="/masculino"
						style="text-decoration: none; color: inherit"
					>
						<Button label="Masculino" variant="text"
					/></router-link>
				</v-row>
			</v-col>

			<v-col sm="3" md="3" lg="2" align="center">
				<router-link to="/shoppingBag" style="text-decoration: none">
					<IconButton
						variant="text"
						icon="mdi-shopping-outline"
						icon-size="30"
						icon-color="blue-grey darken-2"
					/>
				</router-link>
				<router-link to="/login" style="text-decoration: none">
					<IconButton
						variant="text"
						icon="mdi-account-circle-outline"
						icon-size="30"
						icon-color="blue-grey darken-2"
					/>
				</router-link>
			</v-col>
		</v-row>
	</v-toolbar>
</template>
