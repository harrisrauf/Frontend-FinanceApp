<template>
    <h1>Edit Expenses</h1>
    <form>
        <table>
            <tbody>
                <tr>
                    <td>
                        Description
                    </td>
                    <td>
                        <input v-model="this.expense.description">
                    </td>
                </tr>
                <tr>
                    <td>
                        Price
                    </td>
                    <td>
                        <input v-model="this.expense.price">
                    </td>
                </tr>
                <tr>
                    <td>
                        Date
                    </td>
                    <td>
                        <input v-model="this.expense.date">
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
            expense: {
            }
        }
    }, 
    async mounted() {
        const id= this.$route.params.id;
        try {
            this.expense = await fetch('http://localhost:3000/expense/'+id).then(res => res.json());
            this.expense.date=this.expense.date.split('T')[0];
        } catch {
            alert("Error Ocurred")
        }
    },
    methods:{
        async update(){
            try {
                    const response = await fetch('http://localhost:3000/expense', {
                        method: 'POST',
                        body: JSON.stringify(this.expense),
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
        },
         GoBack(){
            window.location.href='/expenses'
        }
    }

}
</script>