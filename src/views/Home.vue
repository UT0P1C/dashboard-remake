<template>

	<div class="home">
		<NavBar/>
		<div class="main">

			<div class="home-container">

			</div>

		</div>
		<Footer />
	</div>

</template>

<script>

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
	name: "Home",
	components: {
		NavBar,
		Footer
	}
};
</script>

<style scoped>



</style>
