<template>
    <div>
        <h1>user</h1>
        <p>This is {{getId}}</p>
    </div>
</template>
<script>
    export default{
        // computed: {
        //     dynamicSegment() {
        //         return this.$route.params.id
        //     }
        // }
        data(){
            return{
                getId : ""
            }
        },
        watch: {
            '$route'(to,from){
                this.getId = to.params.id

            }
        }
    }
</script>