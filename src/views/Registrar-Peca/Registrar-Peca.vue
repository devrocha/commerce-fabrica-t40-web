<script>
import { usePecaStore } from "@/stores/peca";
import { reactive, toRefs } from "@vue/reactivity";

import CreatePecaModal from "@/views/Pecas/components/modal/CreatePecaModal.vue";
import SidebarAdmin from "@/components/SidebarAdmin/SidebarAdmin.vue";

export default {
	components: {
		CreatePecaModal,
		SidebarAdmin,
	},
	setup() {
		const data = reactive({
			openModal: false,
		});

		const handleClickOpenModal = () => {
			data.openModal = !data.openModal;
		};

		const store = usePecaStore();

		const createPeca = async () => {
			const peca = {
				name: data.name,
				description: data.description,
			};
			await store.createPeca(peca);
		};

		return {
			...toRefs(data),
			handleClickOpenModal,
		};
	},
};
</script>

<template>
	<div>
		<SidebarAdmin></SidebarAdmin>
		<v-container>
			<v-row justify="center">
				<v-col cols="6">
					<v-text-field
						v-model="name"
						label="Nome"
						variant="outlined"
						required
					>
					</v-text-field>
					<v-text-field
						v-model="size"
						label="Tamanho"
						variant="outlined"
						required
					></v-text-field>
					<v-text-field
						v-model="color"
						label="Cor"
						variant="outlined"
						required
					></v-text-field>
					<v-text-field
						v-model="price"
						label="Preço"
						variant="outlined"
						required
					></v-text-field>
					<v-text-field
						v-model="image"
						label="Imagem"
						variant="outlined"
						required
					></v-text-field>
					<v-text-field
						v-model="description"
						label="Descrição"
						variant="outlined"
						required
					></v-text-field>
					<v-row align="center" justify="space-around">
						<v-btn @click="handleClickSave()" color="success">
							Cadastrar
						</v-btn>
						<v-btn @click="handleClickCancel()" color="error">
							Cancelar
						</v-btn>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
		<!-- <CreatePecaModal
			:openModal="openModal"
			@closeModal="openModal = $event"
		/> -->
		<router-view name="Admin"></router-view>
		<router-view></router-view>
	</div>
</template>