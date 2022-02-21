<template>

	<div class="home">
		<NavBar/>
		<Footer />
		<div class="main">

		</div>
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
