<script>
import Input from "@/components/Input/Input.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { usePecaStore } from "@/stores/peca";

export default {
	components: {
		Input,
	},
	emits: ["closeModal"],
	props: {
		modelValue: Boolean,
	},
	setup(_, context) {
		const data = reactive({
			name: "",
			description: "",
			price: "",
			image: "",
			size: "",
			color: "",
			category: {},
		});

		const storePeca = usePecaStore();

		const handleClickCancel = () => {
			context.emit("closeModal", false);
		};

		const handleClickSave = async () => {
			const peca = {
				name: data.name,
				description: data.description,
				price: data.price,
				image: data.image,
				size: data.size,
				color: data.color,
			};

			await storePeca.createPeca(peca);
			context.emit("closeModal", false);
		};

		return {
			...toRefs(data),
			handleClickCancel,
			handleClickSave,
		};
	},
};
</script>

<template>
	<v-dialog v-model="modelValue">
		<v-card class="d-flex justify-center pa-6 w-70">
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
		</v-card>
	</v-dialog>
</template>