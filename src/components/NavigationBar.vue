<template>
    <header class="header">
        <a href="#" class="logo">
            <img src="../assets/logo.png" alt="logo"/>
        </a>
        <nav class="navbar" id="navbar" :style="navbarStyle" ref="navbar">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contacts">Contacts</router-link>
            <router-link to="/services">Services</router-link>
        </nav>
        <div class="icons">
            <i class='bx bx-menu' id="menu-icon" @click="handleMenuIconClick" v-if="menuIcon"></i>
            <i class='bx bxl-xing' id="close-icon" @click="handleCloseIconClick" v-if="closeIcon"></i>
        </div>
    </header>
</template>

<script>
export default {
    name: "NavigationBar",
    data() {
        return {
            menuIcon: true,
            closeIcon: false,
            navbarStyle: {
                height: '0',
                bottom: '12px',
                navbarChildren: []
            },
        }
    },

    methods: {
        handleMenuIconClick() {
            this.menuIcon = false
            this.closeIcon = true
            this.navbarStyle.height = '12rem'

            for(let i = 0; i < this.navbarChildren.length; i++) {
                this.navbarChildren[i].style.transform = 'translateY(0)'
            }
        },

        handleCloseIconClick() {
            this.closeIcon = false
            this.menuIcon = true
            this.navbarStyle.height = '0'

            for(let i = 0; i < this.navbarChildren.length; i++) {
                this.navbarChildren[i].style.transform = 'translateY(-50px)'
            }
        }
    },

    mounted() {
        window.addEventListener('resize', () => {
            this.navbarStyle.height = '0'
            this.menuIcon = true
            this.closeIcon = false
        })
        // Access the children elements of the navbar
        const navbarChildren = this.$refs.navbar.children;

        // Convert the HTMLCollection into an array and assign it to data property
        this.navbarChildren = Array.from(navbarChildren)
    }
}
</script>

<style scoped>

.header {
    width: 100%;
    background-color: #565656;
    padding: .75rem 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
}

.logo img {
    max-width: 100px;
}

.navbar {
    position: relative;
}

.navbar a{
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 400;
    margin-left: 1.25rem;
}

.icons {
    font-size: 2.8rem;
    position: absolute;
    right: 5%;
    color: #fff;
    cursor: pointer;
    display: none;
}

@media (max-width: 992px) {
    .header {
        padding: .75rem 5%;
    }
}

@media (max-width: 874px) {
    .icons {
        display: inline-flex;
    }

    .navbar {
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        height: 0;
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(50px);
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
        overflow: hidden;
        transition: .3s ease;
    }

    .navbar a {
        display: block;
        font-size: 1.1rem;
        text-align: center;
        margin: 1.5rem 0;
        transform: translateY(-50px);
        transition: .3s ease;
    }
}

</style>