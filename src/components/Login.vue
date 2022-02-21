<template>
	<div class="main">

		<div class="login">

			<div class="login-content">
				<header>
				<h1>Login</h1>
				</header>

				<div class="login-form">

						<form>
							<div class="mb-3">
								<label class="form-label">E-mail</label>
								<input type="email" class="form-control" v-model="email" required>
							</div>

							<div class="mb-3">
								<label class="form-label">Password</label>
								<input type="password" class="form-control" v-model="password" required>
							</div>

							<div class="mb-3" id="signUp">
								<a href="/register">New here? Sign Up</a>
							</div>
						</form>
						
				</div>
				<input 
				type="submit" 
				class="btn" 
				value="Sign In" 
				v-on:click="login" 
				v-on:keyup.enter="login"
				/>
				<div class="github-auth">
					<a id="github-button" class="github">
						<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github logo"/>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
	name: "Login",
	data(){
		return{
			email: "",
			password: ""
		};
	},
	methods:{
		login: function(){
			firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
				() => {
					alert("Login Successful ");
					this.$router.replace("home");
				},
				() => {
					alert("Wrong Email or Password. Please try again");
				});
		}
	}
};
</script>


<style scoped>

.login{
	display: flex;
	align-content: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}

.login-content{
	border-radius: 20px;
    background-color: #AD70C1;
    width: 350px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	margin-top: 50px;
}

header{
	width: 100%;
    display: flex;
    justify-content: center;
	align-content: flex-start;
}

h1{
	font-size: 35px;
	color: #272929;
}

#signUp a{
	text-decoration: none;
	color: #272929;
}

.btn{
    padding: 10px 15px;
    background-color: #8f01bf;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s opacity;
	color: #ecf0f1;
	justify-content: center;
    align-items: center;
}

.btn:hover{
    opacity: 0.8;
}

.github-auth img{
	justify-content: center;
	align-items: center;
	height: 35px;
	margin-top: 20px;
	cursor: pointer;
}

</style>