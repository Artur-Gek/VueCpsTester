import{createRouter, createWebHistory} from "vue-router";
import Main from "@/pages/Main.vue";
import NextPage from "@/pages/NextPage"


const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/next',
        component: NextPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BAS_URL),
    routes
    
})

export default router;