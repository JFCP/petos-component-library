<template>
    <nav id="peto-library-navbar">
        <ul class="navbar-links">
            <li>
                <router-link to="/headings">Headings</router-link>
            </li>
            <li>
                <router-link to="/buttons">Buttons</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup></script>

<style scoped lang="scss">

#peto-library-navbar {
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    max-width: 90%;
    background: white;
    border-radius: 0.5rem;
    z-index: 100;

    & > .navbar-links {
        display: flex;
        list-style: none;

        & > li {

            & > a {
                display: block;
                padding: 1rem;
                color: var(--colour-black);
                font-size: 1.2rem;
                font-weight: 600;
                text-decoration: none;
            }

            &:first-child {
                & > a {
                    padding: 1rem 1rem 1rem 2rem;
                }
            }

            &:last-child {
                & > a {
                    padding: 1rem 2rem 1rem 1rem;
                }
            }
            
        }
    }
}

</style>