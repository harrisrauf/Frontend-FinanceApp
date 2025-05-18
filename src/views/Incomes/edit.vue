<template>
    <h1>Edit Incomes</h1>
    <form>
        <table>
            <tbody>
                <tr>
                    <td>
                        Source
                    </td>
                    <td>
                        <input v-model="this.income.description">
                    </td>
                </tr>
                <tr>
                    <td>
                        Amount
                    </td>
                    <td>
                        <input v-model="this.income.amount">
                    </td>
                </tr>
                <tr>
                    <td>
                        Date
                    </td>
                    <td>
                        <input v-model="this.income.date">
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                        <button type="button" v-on:click="update">Update</button>
                        <button type="button"v-on:click='GoBack'>Return</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</template>

<script>
export default {
    data() {
        return {
            income: {
            }
        }
    }, 
    async mounted() {
        const id= this.$route.params.id;
        try {
            this.income = await fetch('http://localhost:3000/income/'+id).then(res => res.json());
            this.income.date=this.income.date.split('T')[0];
        } catch {
            alert("Error Ocurred")
        }
    },
    methods:{
        GoBack(){
            window.location.href="/incomes"
        },
        async update(){
                    try {
                    const response = await fetch('http://localhost:3000/income', {
                        method: 'PUT',
                        body: JSON.stringify(this.income),
                        headers: { 'Content-Type': 'application/json' }
                    });
                    if (response.ok) {
                        alert('Saved Successfully')
                    }
                    else {
                        alert('Error Ocurred')
                    }
                } catch (error) {
                    console.error(error)
                }
        }
    }
}

</script>