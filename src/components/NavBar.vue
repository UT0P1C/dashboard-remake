<template>
	<div class="nav" id="nav">

		<router-link to="/login">Sair <i class="fa-solid fa-person-to-door"></i></router-link>

	</div>
</template>

<script>
export default {
	
};
</script>

<style scoped>

#nav {
    background-color: #AD70C1;
    border-bottom: 4px solid #7e00a8;
    padding: 40px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

#nav a{
	color: #111;
	text-decoration: none;
	margin: 12px;
    transition: .5s;
	font-size: 20px;
}

#nav a:hover{
    color: #fff;
}

</style>